const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
    },
    userName: {
        type: String,
        required: true,
    },
    postDesc: {
        type: String,
        required: true,
    }

}, { versionKey: false })
module.exports = mongoose.model("comments", commentSchema)