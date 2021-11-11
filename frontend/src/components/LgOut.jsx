import React from 'react';
import { useGoogleAuth } from './ggleAuth';

const LgOut = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button onClick={signOut}>Logout</button>
      );
};

export default LgOut;
