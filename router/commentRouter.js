const express = require('express')
const { createComment, getComment } = require('../controller/commentController')
const router = express.Router()

router.post('/add', createComment)
router.get("/get", getComment)

module.exports = router