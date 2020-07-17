import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQkQ2cVpyiwnVxFbGmWcUx3GcVlxI9NXID_65UnSXuItcN3g/viewform?vc=0&c=0&w=1"
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
