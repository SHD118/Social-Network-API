const { Thought, User } = require('../models')


module.exports = {

    // Get all thoughts
    getAllThoughts(req, res) {
        //populate thought data with verison and send a response back
        Thought.find({})
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDataDB => res.json(thoughtDataDB))
            .catch(err => res.status(500).json(err))
    },

    // get one thought by ID
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDataDB => thoughtDataDB ? res.json(thoughtDataDB) : res.status(404).json({ message: thought404Message(params.id) }))
            .catch(err => res.status(404).json(err))
    },

    // add a thought
    createThought({ body }, res) {
        Thought.create({ thoughtText: body.thoughtText, username: body.username })
            .then(({ _id }) => User.findOneAndUpdate({ _id: body.userId }, { $push: { thoughts: _id } }, { new: true }))
            .then(thoughtDataDB => res.json(thoughtDataDB))
            .catch(err => res.status(400).json(err))
    },

    // update thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(thoughtDataDB => thoughtDataDB ? res.json(thoughtDataDB) : res.status(404).json({ message: thought404Message(params.id) }))
            .catch(err => res.status(400).json(err))
    },

    // delete thought 
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughtDataDB => thoughtDataDB ? res.json(thought200Message(thoughtDataDB._id)) : res.status(404).json({ message: thought404Message(params.id) }))
            .catch(err => res.status(404).json(err))
    },

    // add a reaction to thought
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: { reactionBody: body.reactionBody, username: body.username } } },
            { new: true, runValidators: true })
            .then(thoughtDataDB => thoughtDataDB ? res.json(thoughtDataDB) : res.status(404).json({ message: thought404Message(params.id) }))
            .catch(err => res.status(400).json(err))
    },

    // remove a reaction from thought
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reactions: { _id: params.reactionId } } }, { new: true })
            .then(thoughtDataDB => thoughtDataDB ? res.json(reaction200Message(params.thoughtId)) : res.status(404).json({ message: thought404Message(params.id) }))
            .catch(err => res.status(404).json(err))
    }
};