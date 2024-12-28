const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser, forgetpassword, verifyPasswordToken, resetPassword, } = require('../controllers/user');
const checkToken = require('../middleware/checkToken');
const router = express.Router();


router.post('/create',registerUser)
router.post('/login',loginUser)
router.put('/update/:_id', checkToken, updateUser)
router.delete('/delete/:_id',checkToken,deleteUser)
router.post('/forgetpassword',forgetpassword)
router.get('/forgetpassword/:token',verifyPasswordToken)
router.post('/resetpassword/:token',resetPassword)

module.exports = router