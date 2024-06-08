const Post = require("../Model/postModel1");



const post=async(req,res)=>{
    
    try {
        const {username,title,description,vacancy,shopImage}=req.body
        if (!username || !title || !description || !vacancy || !shopImage) {
            return res.status(400).json("All fields are required!");
          }
        const data=new Post({
            username,
            title,
            description,
            vacancy,
            shopImage,
            applied:5
        })
        await data.save()
        return res.status(201).json("post have been added successfully!")

    } catch (error) {
        console.log(error)
        res.status(500).json("some error happened in adding post!")
    }
}
module.exports=post