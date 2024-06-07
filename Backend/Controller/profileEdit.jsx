const User = require("../Model/userModel");


const profileEdit=async(req,res)=>{
    try {
        const {username,fullname,email,banner,prof,desc}=req.body
        const updatedUser=await User.findOneAndUpdate(
            {username:username},
            {fullname:fullname,email:email,banner:banner,prof:prof,desc:desc},
            {new:true}
        );

        if(!updatedUser){
            return res.status(401).json("user not found!")
        }
            res.status(201).json("user updated!")
    } catch (error) {
        console.log(error)
        res.status(500).json("error happened in update")
    }
}
module.exports=profileEdit;