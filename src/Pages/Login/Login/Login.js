import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { signInUsingGoogle, setUser, email, password, setError, toggleLogin, processLogin, handleEmailChange, handlePasswordChange, error } = useAuth();
    const [logViaEmail, setLogViaEmail] = useState(false);

    const redirect_url = location.state?.from || '/home';

    const handleBtnEmail = () => {

        setLogViaEmail(true);


    }
    const handleBtnGoogle = () => {

        setLogViaEmail(false);
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })

    }
    const signViaEmail = () => {
        processLogin(email, password)
            .then(result => {
                // const user = result.user;
                setUser(result.user)
                setError('');
                history.push(redirect_url);
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();

        toggleLogin(true);
        signViaEmail();
    }
    return (
        <div className="mx-5 mb-3 container mx-auto w-50">
            <h1>Please Login Here</h1>

            <button className="btn btn-danger" onClick={handleBtnGoogle} ><i className="fas fa-sign-in-alt"></i>  Login Using Google Account</button><br /><br />

        </div>
    );
};

export default Login;