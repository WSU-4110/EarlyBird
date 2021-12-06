import React from "react";
import './Post.css';
import Comments from './Comments';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

function Post(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <p className="card-text">{props.content}</p>
            </div>
            <form className="comment">
                    <button className="commentBt">
                        <FavoriteBorderRoundedIcon /> likes
                    </button>

                    <button className="commentBt">
                        <ChatBubbleOutlineIcon /> comments
                    </button>
                </form>
        </div>
    );

    <Comments props={props}/>

}

export default Post;