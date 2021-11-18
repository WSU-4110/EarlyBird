import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./SinglePost.css";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';



function SinglePost(props) {

    return (
        <div>

            <div className="singlePost">
                <div className="singlePost-body">
                    <h2 className="singlePost-title">Display example title</h2>
                    <h6 className="casinglePostrd-subtitle mb-2 text-muted">Project</h6>
                    <p className="singlePost-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* <div className="singlePost-body">
                <h2 className="singlePost-title">{props.title}</h2>
                <h6 className="casinglePostrd-subtitle mb-2 text-muted">{props.category}</h6>
                <p className="singlePost-text">{props.content}</p>
            </div> */}

                <form className="comment">
                    <button className="commentBt">
                        <FavoriteBorderRoundedIcon /> likes
                    </button>
                    <button className="commentBt">
                        <ChatBubbleOutlineIcon /> comments
                    </button>
                </form>
            </div>

            <h4 className="commentTitle">Comments</h4>

            <div className="singleComment">
            <h6>Rose</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="singleComment">
            <h6>Jack</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="singleComment">
            <h6>Tom</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

        </div>
    );
}

export default SinglePost;
