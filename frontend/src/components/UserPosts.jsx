import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
import Post from './Post';


function UserPosts() {
//Keep track of User logged in
//const[user, setUser] = useState({
 //   user:''

//})

const [projectPost, setProjectPost] = useState([{
    category: '',
    title: '',
    content: ''
}])

useEffect(()=> {
    const post = async() => {
     const response = await axios.get('http://localhost:3001/userPo')
     .then(response => {
       setProjectPost(filterData(response.data));
     })
     };
     post();
  });

// immediately fetch the user data from local storage
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
const history = useHistory();
const location = useLocation();


const Posts = projectPost.map((p) => {
    return <Post
   category = {p.category}
    title = {p.title}
    content = {p.content}
    />  
})

function filterData(inputs, key){
    key = user
    return inputs.filter((input) => 
    input.category.includes(key));
  }




    return <div>
       {Posts}
      
        
    </div>


}
export default UserPosts;
