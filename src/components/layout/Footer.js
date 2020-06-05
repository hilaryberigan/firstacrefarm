import React from 'react';
import LogoIconReverse from '../../svg/LogoIconReverse';

const Footer = () => (
  <footer className="dark-green-text ">
    <div className="flex py-10 px-10 background-green">
      <div className="flex-1 px-auto py-3">
        <h2 className="text-lg font-semibold">Information</h2>
        
        <ul className="mt-4 leading-loose">
          <li>
            First Acre Farm 
          </li>
          <li> 
            Your Farmer: Andy Donovan
          </li>
          <li>
            (847) 274-9497
          </li>
          <li>
            andy@firstacrefarm.com
          </li>
          <li>
            <a href="https://www.instagram.com/firstacrefarm/">@firstacrefarm</a>
          </li>
        </ul>
      </div>
      <div className="w-1/5 ">
        <LogoIconReverse />
      </div>
    </div>
  </footer>
);

export default Footer;
