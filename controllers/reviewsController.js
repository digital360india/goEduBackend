const asyncHandler = require('express-async-handler')
const Review = require('../modals/review')

const postReview = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add a field')
    }
    console.log(req.body);
    const goal = await Review("reviews").create(req.body)

    res.status(200).json(goal)
});
const getReviews = asyncHandler(async(req, res) => {
    const Revieww = await Review("reviews").find({ schoolId: req.params.id })
    res.status(200).json(Revieww)
});
const updateReview = asyncHandler(async(req, res) => {
    const goal = await Review("reviews").findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Review not found')
    }

    // Check for user
    // if (!req.user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // if (goal.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    const updatedGoal = await Review("reviews").findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
});

module.exports = { postReview, getReviews, updateReview }