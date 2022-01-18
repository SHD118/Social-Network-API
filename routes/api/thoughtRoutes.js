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


router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;