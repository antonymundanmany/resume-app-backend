const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {    
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    }
)

module.exports=mongoose.model("user",userSchema)