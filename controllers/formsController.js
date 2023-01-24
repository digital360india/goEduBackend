const asyncHandler = require('express-async-handler')
const Review = require('../modals/form')
    // const getAllReview = asyncHandler(async(req, res) => {
    //     const Review = await Review(req.params.city).find()
    //     res.status(200).json(Review)
    // });
    // const getReview = asyncHandler(async(req, res) => {
    //     const Review = await Review(req.params.city).findById(req.params.id)
    //     res.status(200).json(Review)
    // });
const postForm = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add a field')
    }
    console.log(req.body);
    const goal = await Review("forms").create(req.body)

    res.status(200).json(goal)
});
// const putReview = asyncHandler(async(req, res) => {
//     const goal = await Review(req.params.city).findById(req.params.id)

//     if (!goal) {
//         res.status(400)
//         throw new Error('Goal not found')
//     }
//     const updatedGoal = await Review(req.params.city).findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//     })

//     res.status(200).json(updatedGoal)
// });
// const deleteReview = asyncHandler(async(req, res) => {
//     const goal = await Review(req.params.city).findById(req.params.id)

//     if (!goal) {
//         res.status(400)
//         throw new Error('Goal not found')
//     }

//     await goal.remove()

//     res.status(200).json({ id: req.params.id })
// });

module.exports = { postForm }