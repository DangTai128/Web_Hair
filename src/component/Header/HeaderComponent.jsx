import React from "react";
import "./styleHeader.css";

const Header = () => {
    return (
        <header>
            <div class = 'container'>
                <a href="#" class = 'logo'>
                    <h2 class = 'logo-text'>QA Hair</h2>
                </a>
                <ul class = 'menu'>
                    <li class = 'item'>
                        <a href="home" class = 'link'>Home</a>
                    </li>
                    <li class = 'item'>
                        <a href="about" class = 'link'>About Us</a>
                    </li>
                    <li class = 'item'>
                        <a href="hair" class = 'link'>Hair</a>
                    </li>
                    <li class = 'item'>
                        <a href="contact" class = 'link'>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;