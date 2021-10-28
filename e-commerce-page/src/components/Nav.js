import React, {useState, useEffect} from 'react';
import '../styles/Nav.css'

import logo from '../images/logo.svg';
import closeIcon from '../images/icon-close.svg';
import cartIcon from '../images/icon-cart.svg';
import avatarImg from '../images/image-avatar.png';

function Nav() {
    const [navActive, setNavActive] = useState(false);
    useEffect(() => {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('nav-active');
    });

    const navSlide = () => {
        setNavActive(!navActive);
    }

    return(
        <nav>
            <div className="logo">
                <span className="toggle" onClick={navSlide}>
                    <div id="line1"></div>
                    <div id="line2"></div>
                    <div id="line3"></div>
                </span>
                <span><img src={logo} alt="Logo"/></span>
            </div>
            <ul className="nav-links">
                <span id="close-icon" onClick={navSlide}><img src={closeIcon} alt="Close Icon"></img></span>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#men">Men</a></li>
                <li><a href="#women">Women</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div id="cart-avatar">
                <img id="cart" src={cartIcon} alt="Cart Icon"></img>
                <img id="avatar" src={avatarImg} alt="Avatar"></img>
            </div>
        </nav>
    )
}

export default Nav;