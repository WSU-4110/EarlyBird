import React from "react";
import './Post.css';

function Post({post}) {
    return (

        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{post.category}</h6>
                <p className="card-text">{post.content}</p>
            </div>
        </div>

    );
}

export default Post;