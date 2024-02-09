const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter=require("./controllers/userRouter")


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://antony:andevipr@cluster0.apjpygl.mongodb.net/resumeDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/resume",userRouter)

app.listen(3001,()=>{
    console.log("server is running")
})