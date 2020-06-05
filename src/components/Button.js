import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <a href="https://www.tendfarm.com/firstacrefarm"
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        rounded
        text-white

    `}
    >
      {children}
    </a>
  );
};

export default Button;
