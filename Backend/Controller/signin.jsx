const User = require("../Model/userModel");
const bcrypt= require('bcryptjs')

const signin=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const isUser=await User.findOne({username:username})
        if(isUser){
            return res.status(401).json("User already exist!")
        }
        const pas= await bcrypt.hash(password,10)
        const data=new User({
            username:username,
            password:pas
           
        })
        await data.save();
        return res.status(201).json("Registered sucessfully!")
    } catch (error) {
        res.status(500).json("error in signup!")
        console.log("some error occured ")
        console.log(error)
    }
    
}

module.exports=signin