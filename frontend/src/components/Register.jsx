import React from "react";
import './Register.css';
import { render } from "react-dom";
import { GoogleLogin } from "react-google-login";


const responseGoogle= response => {
    console.log(response);

  }



function Register() {

    
    return(
    <div class = "signIn">
        
    <GoogleLogin clientId = "874934368638-v7dtscnojaffh40c091bd0msjl0j5idl.apps.googleusercontent.com" 
                button ="Sign in" onSuccess ={responseGoogle}
            onFailure={responseGoogle} />



    </div>
    );
}
    
    


export default Register;
    