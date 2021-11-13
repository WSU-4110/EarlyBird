import React from "react";
import { GoogleLogin } from "react-google-login";
import './Login.css';


const responseGoogle= response => {
    console.log(response);
   
  }
  
  
 function Login() {
  
    return <div class = "signIn">
        <GoogleLogin clientId = "874934368638-v7dtscnojaffh40c091bd0msjl0j5idl.apps.googleusercontent.com"
                button ="signIn" onSuccess ={responseGoogle}
            onFailure={responseGoogle} />
     
    </div>
 }
  
 export default Login;
 