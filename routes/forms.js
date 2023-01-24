const express = require('express');
const { postForm } = require("../controllers/formsController")
const router = express.Router();

router.route('/').post(postForm);
// router.route('/:city/:id').get(getData).put(putData).delete(deleteData);
// router.route('/:city/reviews').get(getAllData).post(postData);
// router.route('/:city/reviews/:id').get(getData).put(putData).delete(deleteData);

module.exports = router