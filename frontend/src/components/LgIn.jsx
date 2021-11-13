import React from 'react';
import { useGoogleAuth } from './ggleAuth';

const LgIn = () => {

    const { signIn } = useGoogleAuth();

    return (
        <button onClick={signIn}>Login</button>
      );
};

export default LgIn;