import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {} from "react-router-dom";
import axios from 'axios';
import UserInfo from "./UserInfo";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";


function UserProfile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    //set the user to null
    setUser(null);
  }


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
          <div class = "name">User</div>
          <div class = "Email">Email</div>
        
        
        

          
        </div>
      
    </div>


}
export default UserProfile;
