import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
import UserInfo from "./UserInfo";


function UserPosts() {
//Keep track of User logged in
//const[user, setUser] = useState({
 //   user:''

//})

const [user, setUser] = useState([{
    name: '',
    email: ''
}])



useEffect(()=> {
  const info = async() => {
   const response = await axios.get('http://localhost:3001/userPo')
   .then(response => {
     setUser(response.data);
   })
   };
   info();
});


const Info = user.map((p) => {
    return <UserInfo
   name = {p.name}
    email = {p.email}
    ></UserInfo>
    
})




    return <div>
       {Info}
        
    </div>


}
export default UserPosts;
