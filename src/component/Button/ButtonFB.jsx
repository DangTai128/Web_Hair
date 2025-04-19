
import React from 'react';
import './fbButton.css';

const fbButton = () => {
    const handleClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61565826924384', '_blank'); // Mở YouTube trong tab mới
    };

    return (
        <button onClick={handleClick} className="fb-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-2.95 12.5h-3.1v10h-4.2v-10h-2.8v-3.2h2.8v-2.4c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.1 2.4.1v2.7h-1.4c-1.3 0-1.7.8-1.7 1.6v2h3.1l-.4 3.2z" fill="#3b5998"/>
            </svg>
            Kênh YouTube
        </button>
    );
};

export default fbButton;