import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow hidden sm:block">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 header-green logo-header">
      <div className="flex items-center text-2xl">
        <div className="w-20 mr-3">
          <LogoIcon />
        </div>
      <div className="header-green px-4">
        First Acre Farm
      </div>
      </div>

      <div className="text-xl flex mt- sm:mt-0">
        <AnchorLink offset="50" className="px-6" href="#about">
          About the Farm
        </AnchorLink>
        <AnchorLink offset="125" className="px-6" href="#products">
          Products
        </AnchorLink>
        <AnchorLink offset="150" className="px-6" href="#where">
          Where to Find Us
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm shop-button ">Our Online Shop</Button>
      </div>
    </div>
  </header>
);

export default Header;
