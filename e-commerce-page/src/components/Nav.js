import React, {useState, useEffect, useRef} from 'react';
import '../styles/Nav.css'

import logo from '../images/logo.svg';
import closeIcon from '../images/icon-close.svg';
import cartIcon from '../images/icon-cart.svg';
import avatarImg from '../images/image-avatar.png';

function Nav(props) {
    const isMounted = useRef(false);

    const [navActive, setNavActive] = useState(false);
    useEffect(() => {
        if(isMounted.current) {
            const nav = document.querySelector('.nav-links');
            nav.classList.toggle('nav-active');
        } else {
            isMounted.current = true;
        }

    }, [navActive]);

    const navSlide = () => {
        setNavActive(!navActive);
    }
    const showCheckoutModal = () => {
        props.modalHandle();
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
                <svg onClick={showCheckoutModal} id="cart" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path id="cart-svg" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                </svg>
                {props.cartQuantity > 0 ?
                <p id="cart-quantity">{props.cartQuantity}</p>
                :
                <span></span>
                }
                <img id="avatar" src={avatarImg} alt="Avatar"></img>
            </div>
        </nav>
    )
}

export default Nav;