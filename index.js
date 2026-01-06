import express from 'express'
import route from './Router/router.js'

const app = express()

app.use('/',route)

app.use(express.json())

const PORT = 3455

app.listen(PORT,()=>{
    console.log(`server is running under http://localhost:${PORT}`);    
})