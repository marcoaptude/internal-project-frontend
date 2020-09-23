import React from 'react';
import './styles/Header.scss';
import Logo from '../assets/aptude_logo.jpg';

const Header = () => {
    return ( 
        <header>
            <img src={Logo} alt="" className="logo"/>
            <p className="welcomeMessage">Welcome <span>John</span></p>
        </header>
    );
}
 
export default Header;