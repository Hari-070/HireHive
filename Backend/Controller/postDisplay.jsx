const User = require("../Model/userModel")

const postDisplay=async(req,res)=>{
    try {
        const {username}=req.body
        const data=await User.findOne({username:username})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json("error occured in fetching post datas")
    }
}
module.exports=postDisplay