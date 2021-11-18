import React, {useState} from "react";
import Post from './Post';


function UserPosts() {
//Keep track of User logged in
const[user, setUser] = useState({
    user:''

})


const Posts = projectPost.map((p) => {
    return <Post
    category = {p.category}
    title = {p.title}
    content = {p.content}
    />  
})

    return <div>

        
    </div>


}
export default UserPosts;
