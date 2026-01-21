import express from 'express'
import { deleteData, insert, read, update } from '../Controller/Controller.js'

const route = express.Router()

route.get('/',read)

route.post("/insert",insert)

route.put("/edit/:id",update)
route.delete("/delete/:id",deleteData)

export default route