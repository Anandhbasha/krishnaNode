import newUser from "../Model/crudSchema.js"

export const read = async(req,res)=>{
    try{
        const readData = await newUser.find()
        res.status(200).json(readData)
    }catch(err){
        res.status(409).json({message:"Unable to get Data"})
    }
}

export const insert = async(req,res)=>{
    try{
        const {userName,userMobile,userPassword} = req.body
        const exist = await newUser.findOne({userName})
        if(exist){
            res.status(403).json({message:"User Already exist"})
        }
        const addNew = await newUser({userName,userPassword,userMobile}).save()
        res.status(201).json(addNew)
    }catch(err){
        res.status(408).json(err)
    }
}

export const update = (req,res)=>{
    const {Password} = req.body
    const {id} = req.params
    res.status(208).json("Updated Succesfully")
}

export const deleteData = (req,res)=>{
    const {id} = req.params
    res.status(212).json("Deleted Succesfully")
}