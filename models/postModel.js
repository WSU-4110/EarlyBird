const Mongoose = require("mongoose")

//  create a post schema
const postsSchema = {
    type: String,
    title: String,
    content: String
}

//  use post schema
const Post = mongoose.model("Post", postsSchema);

//  export Post
module.exports = Post;