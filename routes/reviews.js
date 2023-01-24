const express = require('express');
const { postReview, getReviews, updateReview } = require("../controllers/reviewsController")
const router = express.Router();

router.route('/').post(postReview);
router.route('/:id').get(getReviews).put(updateReview);
// router.route('/:city/:id').get(getData).put(putData).delete(deleteData);
// router.route('/:city/reviews').get(getAllData).post(postData);
// router.route('/:city/reviews/:id').get(getReviewsById);
// .put(putData).delete(deleteData);

module.exports = router