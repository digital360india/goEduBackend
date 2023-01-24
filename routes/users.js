const express = require('express');
const { registerUser, loginUser, getMe } = require("../controllers/usersController")
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.get('/getUser', protect, getMe)

module.exports = router


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2U1YjAwMTQzYjQxYjdhMDE0MjQzNSIsImlhdCI6MTY3NDQ2ODA5NiwiZXhwIjoxNjc3MDYwMDk2fQ.TX8ziXvzavezAMdO2-bGcvmBx1vAUQtbKuhLw8O69oQ