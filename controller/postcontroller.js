const postModel = require("../model/postModel")

const postCreate = async (req, res) => {
    try {
        const { userId, postTitle } = req.body
        // const { userId } = req.params
        if (userId && postTitle) {
            let data = await postModel.create({
                userId: userId,
                postTitle: postTitle
            })
            res.json({ status: 200, "data": data })
        }
        else {
            console.log("all field are required")
        }
    }
    catch (error) {
        console.log(error)
    }
}

const get = async (req, res) => {
    const data = await postModel.find().populate('userId')
    res.json({
        Message: "succses",
        data
    })
}
module.exports = {
    postCreate,
    get
}