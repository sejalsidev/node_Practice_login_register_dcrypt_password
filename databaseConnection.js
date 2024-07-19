const mongoose = require('mongoose')
const dataConnect = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/users").then(() => {
        try {
            console.log("database connected")
        }
        catch (error) {
            console.log("not database conncet")
        }
    }).catch((error) => {
        console.log("error database connected", e)
    })
}

module.exports = { dataConnect }