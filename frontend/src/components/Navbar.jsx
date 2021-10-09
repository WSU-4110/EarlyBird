import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import Register from "./Register";




function Navbar() {

    //return Navbar here
    return <nav class="navbar">


<ul class="tabs">

<a href = "./Home"><img src = "images/logo.png" alt = "logo" class = "logo"></img></a>
   
    
     <li class="item-right">
        <Link class="Login" to = "/Login">Login</Link>
     </li>
     <p class = "item-right">/</p>
     <li class="item-right">
        <Link class="CreateAccount" to = "/Register">Create Account</Link>
        
     </li>


</ul>


    </nav>

}

export default Navbar;