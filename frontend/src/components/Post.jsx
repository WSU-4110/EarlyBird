import React from "react";
import './Post.css';
import Comments from './Comments';

function Post(props) {
    const recommendedPosts = [props].filter(({ _id }) => _id !== props._id);

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
        
    <Comments props={props}/>
}

export default Post;