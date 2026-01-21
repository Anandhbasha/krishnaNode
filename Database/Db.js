import mongoose  from "mongoose";

const dataBase = async(URL)=>{
    try{
        mongoose.connect(URL)
        console.log("Db is Connected");
        
    }catch(err){
        console.log("Unable to connect");
        
    }
}

export default dataBase