const express = require('express');
const { dataConnect } = require('./databaseConnection');
const userRouter1 = require('./router/userRouter')
const userRouter2 = require('./router/postRouter')
const userRouter3 = require('./router/commentRouter')


const app = express();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("done")
})


app.use('/user', userRouter1)
app.use('/post', userRouter2)
app.use('/comment', userRouter3)


dataConnect().then(() => {
    try {
        console.log("server starting")
    }
    catch (error) {
        console.log("not start server")
    }
}).catch((error) => {
    console.log("not connected server")
})

app.listen(4200)