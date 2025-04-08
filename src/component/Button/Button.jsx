import React from 'react';
import { Link } from 'react-router-dom';
import './styleButton.css';

const Button = ({ variant, size, className, children, to }) => {
  const variantClass = variant === "outline" ? "button-outline" : "button-default";
  const sizeClass = size === "lg" ? "button-lg" : "button-sm";

  return (
    <Link 
      to={to} 
      className={`button ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;