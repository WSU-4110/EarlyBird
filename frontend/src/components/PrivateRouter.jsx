import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "./ggleAuth";

const PrivateRouter = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Redirect exact from="/private" to="/" />
            )} />
        </div>
    );
};

export default PrivateRouter;