import express from 'express'
import { deleteData, insert, read, update } from '../Controller/Controller.js'
import { loginUser, registerUser, verifyToken } from '../Controller/loginController.js'

const route = express.Router()

route.get('/',verifyToken,read)

route.post("/insert",insert)

route.put("/edit/:id",update)
route.delete("/delete/:id",deleteData)

route.post("/register",registerUser)
route.post("/login",loginUser)

export default route