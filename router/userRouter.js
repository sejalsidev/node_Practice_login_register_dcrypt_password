const express = require('express')
const { createUser, register, login } = require('../controller/userController')

const router = express.Router()

router.post('/add', createUser)
router.post("/register", register)
router.post("/login", login)

module.exports = router

