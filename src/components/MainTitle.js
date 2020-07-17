 import React from 'react';
 const MainTitle = ({ className = '' }) => (
    <h1 className={`${className}`}>
      <div className="block lg:hidden">
        Fresh. Local. Human Powered.
      </div>
      <div className="hidden lg:block">
        Fresh. Local.
       <br/>
        Human Powered.
      </div>
    </h1>
);

export default MainTitle;


