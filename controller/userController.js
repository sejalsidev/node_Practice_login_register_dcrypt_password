const userModel = require("../model/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        if (userName && email && password) {
            let data = await userModel.create({
                userName: userName,
                email: email,
                password: password
            })
            res.json({ status: 200, "data": data })
        }
        else {
            res.json({
                Message: "all field are require "
            })
        }
    }
    catch (error) {
        res.json({ status: 500, message: "internal server error" })
        console.log(error)
    }
}

const register = async (req, res) => {
    const { userName, email, password, confirm_password } = req.body
    const userData = await userModel.findOne({ email })
    console.log(userData, "userDatauserDatauserData")
    try {
        if (!userData) {
            if (userName && email && password && confirm_password) {
                if (password === confirm_password) {
                    const decrpPwd = await bcrypt.hash(password, 10)
                    let data = await userModel.create({
                        userName: userName,
                        email: email,
                        password: decrpPwd
                    })
                    console.log(data, "data")
                    return res.json({
                        status: 200,
                        data
                    })
                } else {
                    return res.json({
                        status: 400,
                        message: "please check password and confirm password"
                    })
                }
            }
            else {
                return res.json({
                    status: 400,
                    message: "all field are required"
                })
            }
        } else {
            return res.json({
                status: 400,
                message: "user already register "
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: 'internal server error '
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const userData = await userModel.findOne({ email })
    console.log(userData, "userDatauserDatauserDatauserData")
    try {
        if (email && password) {
            if (userData) {
                const token = jwt.sign({ id: userData._id, email: userData.email }, 'your_secret_key', { expiresIn: '1h' });
                console.log(token, "tokentokentokentoken")
                return res.json({
                    status: 200,
                    message: 'login successfully',
                    token
                })
            } else {
                return res.json({
                    status: 400,
                    message: "invalid email and password"
                })
            }
        }
        else {
            return res.json({
                status: 401,
                message: "all field are required"
            })
        }
    } catch (error) {
        console.log(error.message, "errorerrorerrorerrorerror")
        return res.json({
            status: 500,
            message: 'internal server error '
        })
    }

}

module.exports = {
    createUser,
    register,
    login
}