const express = require('express')
const { postCreate, get } = require('../controller/postcontroller')
const router = express.Router()

router.post("/add", postCreate)
router.get("/get", get)


module.exports = router