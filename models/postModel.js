const mongoose = require("mongoose")

//  create a post schema
const postsSchema = {
    category: String,
    title: String,
    content: String,
    comments: { type: [String], default: [] }
}

//  use post schema
const Post = mongoose.model("Post", postsSchema);

//  export Post
module.exports = Post;

