import express from 'express'
import route from './Router/router.js'
import dataBase from './Database/Db.js'

const app = express()
app.use(express.json())

app.use('/',route)

dataBase("mongodb://127.0.0.1:27017/Newone")

const PORT = 3455

app.listen(PORT,()=>{
    console.log(`server is running under http://localhost:${PORT}`);    
})