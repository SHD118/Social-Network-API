const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thoughts/:userId
// router
// .route('/:userId')
// .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  // api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;