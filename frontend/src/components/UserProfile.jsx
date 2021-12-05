import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {} from "react-router-dom";
import axios from 'axios';
import UserInfo from "./UserInfo";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";
//import { userProfile } from "../../../controllers/user";
const mongoose = require("mongoose");

// const [state , setStage] = useState("");
// const [signIn, setSignIn] = useState("SI");

// useEffect(() => {
//   mongoose.auth().onAuthStateChanged(function (user){
//     if (user){
//     console.log(user._id);
//     userRef.child(user._id).onc
//     setStage("loggedIn");
//     setSignIn("SI");
//     } else{
      
//       console.log("No Use Logged In");
//       setStage("notLoggedIn")
//     }
//   });
// } , []);

// const changeState = value =>{
//   setSignIn(value);
// };


function UserProfile() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [user, setUser] = useState([{
    name: '',
    email: '',
    
}])
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    //set the user to null
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('userProfile')));

    if(!user){
        history.push('/Login');
    }
}, [location]);

// const prof = user.map((p) => {
//   return <div>
//   <h5>{p.name}</h5>
//   <h5> {p.email}</h5>
//   </div>  
// })


    return <div>
     
        <div class = "card1">
        <div >
        <Link
                      to='/'
                      className='logout'
                      onClick={logout}
                    > Logout </Link>
        </div>
          <div class = "image1">
          <img src = "images/profile.png" alt = "profile"/>
            </div>
          <div class = "name">User  </div>
          {user && <p>{user.name} </p> }      
          <div class = "Email">Email</div>
          {user && <p>{user.email} </p> }
        
        
        

          
        </div>
      
    </div>


}
export default UserProfile;
