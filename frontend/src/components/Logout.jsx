import React from 'react';
import GoogleLogout from 'react-google-login';

const clientId = '874934368638-v7dtscnojaffh40c091bd0msjl0j5idl.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout Success');
    };

    return(
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;
