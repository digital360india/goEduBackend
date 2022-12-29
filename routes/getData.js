const express = require('express');
const { getAllData, getData, postData, putData, deleteData } = require("../controllers/dataController")
const router = express.Router();

router.route('/:city').get(getAllData).post(postData);
router.route('/:city/:id').get(getData).put(putData).delete(deleteData);
router.route('/:city/reviews').get(getAllData).post(postData);
router.route('/:city/reviews/:id').get(getData).put(putData).delete(deleteData);
// app.get('/', (req, res) => {
//     res.status(200).json({ mesg: 'Hello World!' })
// })
// app.post('/', (req, res) => {
//     res.status(200).json({ mesg: 'Hello World!' })
// })
// app.put('/:id', (req, res) => {
//     res.status(200).json({ mesg: `Hello World! ${req.params.id}` })
// })
// app.delete('/:id', (req, res) => {
//     res.status(200).json({ mesg: 'Hello World!' })
// })

module.exports = router