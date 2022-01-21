const { Thought, User } = require('../models');

module.exports = {
    
    getAllUsers(req, res) {
        User.find({})
        .populate('thoughts')
        .populate({ path: 'friends', select: '-__v'})
        // .select('-__v')
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(500).json({err : err.message}))
    },
        
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate('friends')
            .populate('thoughts')
            .select("-__v")
            .then(userDataDB =>  userDataDB ? res.json(userDataDB) : res.status(404).json({ message: user404Message(params.userId) }))
            .catch(err => res.status(500).json({err : err.message}))
        },

           // add a new user 
    createUser({ body }, res) {
        User.create({ username: body.username, email: body.email})
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(400).json({err : err.message}))
    },

    // update user info 
    updateUser(req, res) {
        console.log(req.params.userId)
        User.findOneAndUpdate({ _id: req.params.userId },   { $set: req.body }, { new: true, runValidators: true })
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
            .catch(err => res.status(400).json({err : err.message} ))
    },

    // delete user 
    deleteUser({ params }, res) {
        console.log(params)
        User.findOneAndDelete({ _id: params.userId })
        .then(userDataDB => {
            if (!userDataDB) {

                return res.status(404).json({ message: user404Message(params.userId) })
                
            }
            res.json(userDataDB)

        
        })
        .catch(err => res.status(400).json({err : err.message}))
    },

    // add a friend to user
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true })
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(400).json({err : err.message}))
    },

    // remove a friend from user 
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } })
        .then(userDataDB => res. status(200).json(userDataDB).json(user204Message(params.friendId, 'User')))
        .catch(err => res.json({err : err.message}))
    }

};
