import React from 'react';
import './styles/Login.scss';

const Login = () => {
    return ( 
        <div className="login__container">
            <div className="login__form__container">
                <form>
                    <label>E-mail</label>
                    <input type="email"/>
                    <label>Password</label>
                    <input type="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    );
}

export default Login;
