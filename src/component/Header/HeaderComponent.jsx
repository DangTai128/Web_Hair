import React from "react";
import HeaderStyle from '../Header/styleHeader.css';

const Header = () => {
    return (
            <div class = 'container'>
                <a href="#" class = 'logo'>
                    <h2 class = 'logo-text'>QA Hair</h2>
                </a>
                <ul class = 'menu'>
                    <li class = 'item'>
                        <a href="#" class = 'link'>Home</a>
                    </li>
                    <li class = 'item'>
                        <a href="#" class = 'link'>About us</a>
                    </li>
                    <li class = 'item'>
                        <a href="#" class = 'link'>Hair</a>
                    </li>
                    <li class = 'item'>
                        <a href="#" class = 'link'>Contact</a>
                    </li>
                </ul>
            </div>   
    )
}

export default Header;