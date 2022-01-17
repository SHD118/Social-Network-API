const { Thought, User } = require('../models');

module.exports = {
    
    getAllUsers(req, res) {
        User.find({})
        .populate({ path: 'thoughts', select: '-__v'})
        .populate({ path: 'friends', select: '-__v'})
        .select('-__v')
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(500).json(err))
    },
        
        getUserById({ params }, res) {
            User.findOne({ _id: params.id })
            .populate({ path: 'friends', select: '-__v' })
            .populate({ path: 'thoughts', select: '-__v', populate: { path: 'reactions'}})
            .select('-__v')
            .then(userDataDB =>  userDataDB ? res.json(userDataDB) : res.status(404).json({ message: user404Message(params.id) }))
            .catch(err => res.status(404).json(err))
        },

           // add a new user 
    createUser({ body }, res) {
        User.create({ username: body.username, email: body.email})
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(400).json(err))
    },

    // update user info 
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(userDataDB =>  userDataDB ? res.json(userDataDB) : res.status(404).json({ message: user404Message(params.id) }))
        .catch(err => res.status(400).json(err))
    },

    // delete user 
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(userDataDB => {
            if (!userDataDB) {
                return res.status(404).json({ message: user404Message(params.id) })
            }
            Thought.deleteMany({ username: userDataDB.username}).then(deletedData => deletedData ? res.json({ message: user204Message(params.id)}) : res.status(404).json({ message: user404Message(params.id) }))
        })
        .catch(err => res.status(400).json(err))
    },

    // add a friend to user
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId}, { $push: { friends: params.friendId } }, { new: true, runValidators: true })
        .then(userDataDB => res.json(userDataDB))
        .catch(err => res.status(400).json(err))
    },

    // remove a friend from user 
    removeFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId}, { $pull: { friends: params.friendId} })
        .then(userDataDB => res.status(200).json(user204Message(params.friendId, 'User')))
        .catch(err => res.json(err))
    }

};
