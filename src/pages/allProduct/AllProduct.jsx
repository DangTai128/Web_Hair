// src/components/ProductList.js
import React from 'react';
import Box from '../../component/Box/Box';

const products = [
    { id: 1, name: 'Hair Spray', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'SumoClay', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Hair Treatment', price: 30, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Box key={product.id} />
            ))}
        </div>
    );
};

export default ProductList;