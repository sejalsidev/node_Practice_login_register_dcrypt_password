const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    postTitle: {
        type: String,
        required: true,
    },

}, { versionKey: false })
module.exports = mongoose.model("posts", postSchema)