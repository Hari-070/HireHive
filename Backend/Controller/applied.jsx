const Post = require("../Model/postModel1");

const applied = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { applied: 1 } },
      { new: true }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = applied;
