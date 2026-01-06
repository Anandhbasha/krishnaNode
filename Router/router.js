import express from 'express'

const route = express.Router()

route.get('/',(req,res)=>{
    res.status(200).json("Node is Working")
})

route.post("/",(req,res)=>{
    const {userName,Password} = req.body
    res.status(201).json("Data Inserted Successfully")
})

route.put("/edit/:id",(req,res)=>{
    const {Password} = req.body
    const {id} = req.params
    res.status(208).json("Updated Succesfully")
})
route.delete("/delete/:id",(req,res)=>{
    const {id} = req.params
    res.status(212).json("Deleted Succesfully")
})

export default route