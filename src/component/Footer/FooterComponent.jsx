import React from "react";
import "./styleFooter.css"

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class='Box-information'>
                    <h4>Contact information</h4>
                        <p>Mail: abcd1234@gmail.com</p>
                        <p>Phone: 0123456789</p>
                        <p>Factory: Bai Thuong Village, Doan Bai Commune, Hiep Hoa District,Bac Giang Province, Vietnam</p>
                </div>
                <div class='Box-product'>
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#" class="item">Tape in</a></li>
                        <li><a href="#" class="item">Weft</a></li>
                        <li><a href="#" class="item">Bulk</a></li>
                        <li><a href="#" class="item">Clip-in</a></li>
                        <li><a href="#" class="item">Closure</a></li>
                        <li><a href="#" class="item">Frontal</a></li>
                        <li><a href="#" class="item">Wig</a></li>
                    </ul>
                </div>
                <div class="Box-help">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#" className="chat">How to buy</a></li>
                        <li><a href="#" className="chat">Contact</a></li>
                        <li><a href="#" className="chat">FQAs</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;