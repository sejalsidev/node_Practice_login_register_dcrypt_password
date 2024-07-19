const commentModel = require("../model/commentModel")

const createComment = async (req, res) => {
    try {
        const { postId, userId, userName, postDesc } = req.body
        // const { postId, userId } = req.params
        if (postDesc && postId && userId) {
            let data = await commentModel.create({
                userId: userId,
                postId: postId,
                userName: userName,
                postDesc: postDesc
            })
            res.json({ status: 200, "data": data })
        }
        else {
            console.log("all field are require")
        }
    }
    catch (error) {
        console.log(error)
    }
}
const getComment = async (req, res) => {
    const data = await commentModel.find().populate('userId', 'postId')
    res.json({
        Message: "succses",
        data
    })
}
module.exports = {
    createComment,
    getComment
}