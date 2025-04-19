// src/components/Product.js
import React from 'react';
import './styleBox.css';

const Box = ({ image, name, price }) => {
    return (
        <div className="product">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price}</p>
            <button className="add-to-cart">Add To Cart</button>
        </div>
    );
};

export default Box;