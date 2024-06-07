const mongoose=require('mongoose');

const UserModel=new mongoose.Schema({
    username:{type:String,required:true},
    fullname:String,
    email:String,
    banner:String,
    prof:String,
    desc:String,
    password:{type:String,required:true}
})

const User=mongoose.model("User",UserModel);
module.exports=User