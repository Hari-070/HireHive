const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    vacancy:{
        type:Number,
        required:true
    },
    shopImage:{
        type:String,
        required:true
    },
    applied:{
        type:Number,
        required:true
    }
})


const Post=mongoose.model("Post",postSchema)

module.exports=Post