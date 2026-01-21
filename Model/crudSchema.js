import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    userName:String,
    userMobile:Number,
    userPassword:String
})

const newUser = mongoose.model("newUsers",newSchema,"Students")

export default newUser