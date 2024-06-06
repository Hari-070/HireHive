const Post = require("../Model/postModel1")

const allPosts=async(req,res)=>{
    try {
        const data=await Post.find()
        if(data.length==0){
            return res.status(401).json("there are no post or can't retrieve")
        }
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json("error occured in retrieving the post datas!")
        console.log(error)
    }
}

module.exports=allPosts