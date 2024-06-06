const bcrypt = require("bcryptjs")
const User = require("../Model/userModel")

const login=async(req,res)=>{
    try {
        const {username,password}=req.body
        console.log(username,password);
        if(!username || !password){
            return res.status(201).json({status:false,code:201})
        }
        const user=await User.findOne({username:username})
        if(!user){
            return res.status(202).json({status:false,code:202})
        }
        const pas=await bcrypt.compare(password,user.password)
        //const pas=user.password==password
        if(!pas){
            return res.status(203).json({status:false,code:203})
        }
        res.status(200).json({status:true,code:202})
    } catch (error) {
        res.status(500).json({status:false,code:202})
        console.log(error)
    }
}

module.exports=login