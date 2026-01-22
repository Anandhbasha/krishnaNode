import newUser from "../Model/crudSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async(req,res)=>{
    try {
        const {userName,userMobile,userPassword} = req.body
        const existingUser = await newUser.findOne({userName})
        if(existingUser){
            res.json({message:"userAlready exist"})
        }
        const Salt = await bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(userPassword,Salt)
        const insertnewUser = await newUser({userName:userName,userPassword:hassedPassword,userMobile:userMobile}).save()
        return res.status(201).json({message:"user Added Sucessfully",data:insertnewUser})
    } catch (error) {
        res.json(error)
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {userName,userPassword} = req.body
        const existingUser = await newUser.findOne({userName})
            if(!existingUser){
                res.json({message:"user not exist"})
            }
            const match = await bcrypt.compare(userPassword,existingUser.userPassword)
            if(!match){
                    res.json({message:"Password is incorrect"})
            }
            const token = jwt.sign({userName},"abcdef",{expiresIn:"1m"})
            res.status(202).json({message:"Login Successfull",token:token})
    } catch (error) {
        res.json(error)
    }
}