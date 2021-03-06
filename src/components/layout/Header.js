import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 xl:px-8 px-4 header-green logo-header">
      <div className="flex items-center text-2xl">
        <div className="w-20 mr-3">
          <LogoIcon />
        </div>
      <div className="header-green lg:px-4 px-2 text-2xl text-xl">
        First Acre Farm
      </div>
      </div>

      <div className="text-lg xl:text-xl flex sm:mt-0 hidden sm:block">
        <AnchorLink offset="50" className="px-6" href="#about">
          About the Farm
        </AnchorLink>
        <AnchorLink offset="125" className="px-6" href="#products">
          Products
        </AnchorLink>
        <AnchorLink offset="150" className="px-6" href="#where">
          Where to Find Us
        </AnchorLink>
        <AnchorLink offset="150" className="px-6" href="#csa">
          Fall CSA Box
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
