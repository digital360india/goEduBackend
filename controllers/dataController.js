const asyncHandler = require('express-async-handler')
const Data = require('../modals/data')


const getAllData = asyncHandler(async(req, res) => {
    const data = await Data(req.params.city).find()
        // const data = await Data(req.params.city).find({ sch: req.user.id })
        // res.status(200).json({ mesg: 'Hello World!' })
    res.status(200).json(data)
});
const getData = asyncHandler(async(req, res) => {
    const data = await Data(req.params.city).findById(req.params.id)
        // const data = await Data(req.params.city).find({ sch: req.user.id })
        // res.status(200).json({ mesg: 'Hello World!' })
    res.status(200).json(data)
});
const postData = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add a field')
    }
    console.log(req.body);
    const goal = await Data(req.params.city).create({...req.body, ttt: [1, 2, 3, 4] }
        //     {
        //     text: req.body.sch,
        //     // user: req.user.id,
        // }
    )

    res.status(200).json(goal)
});
const putData = asyncHandler(async(req, res) => {
    const goal = await Data(req.params.city).findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // // Check for user
    // if (!req.user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // // Make sure the logged in user matches the goal user
    // if (goal.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    const updatedGoal = await Data(req.params.city).findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
});
const deleteData = asyncHandler(async(req, res) => {
    const goal = await Data(req.params.city).findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    //   // Check for user
    //   if (!req.user) {
    //     res.status(401)
    //     throw new Error('User not found')
    //   }

    //   // Make sure the logged in user matches the goal user
    //   if (goal.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    //   }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
});

module.exports = { getAllData, getData, deleteData, putData, postData }









// const putData = asyncHandler(async(req, res) => {
//     // res.status(400).json({ mesg: 'server error!' })
//     // instead of json throw error to also provide html page
//     // throw new Error("Please add a text fields");
//     res.status(200).json({ mesg: `Hello World! ${req.params.id}` })
// });