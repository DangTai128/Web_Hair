import React from "react";
import './styleNavP.css';

const NavProuct = () => {
    return (
        <>
            <ul className="nav-menu">
                <li className="nav-item"><a href="allProduct" className="nav-link">All</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Tape-in</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Weft</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Bulk</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Clip-in</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Closure</a></li>
                <li className="nav-item"><a href="$" className="nav-link">Frontal</a></li>
                <li className="nav-item"><a href="$" className="nav-link">Wig</a></li>
            </ul>
        </>
    )
}

export default NavProuct;