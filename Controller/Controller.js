export const read = (req,res)=>{
    res.status(200).json("Node is Working")
}

export const insert = (req,res)=>{
    const {userName,Password} = req.body
    res.status(201).json("Data Inserted Successfully")
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