import React from "react";
import { GoogleLogin } from "react-google-login";
import './Login.css';
import { refreshTokenSetup } from './refreshTokenSetup';

const clientId = '874934368638-v7dtscnojaffh40c091bd0msjl0j5idl.apps.googleusercontent.com';

function Login() {
    
    const onSuccess = (res) => {
         console.log(res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login Failed]', res);
    };

    return <div class = "signIn">
        <GoogleLogin 
                 clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}
        />   
    </div>
}

export default Login;
