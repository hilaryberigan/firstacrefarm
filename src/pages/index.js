import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import AboutImage from '../svg/AboutImage';
import MarketIcon from '../svg/MarketIcon';
import SaleIcon from '../svg/SaleIcon';
import StoreIcon from '../svg/StoreIcon';
import BasketIcon from '../svg/BasketIcon';

export default () => (
  <Layout>
    <section className="background-green py-20">
      <div className="mx-auto my-auto lg:flex">
        <div className="px-10 py-20 lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none dark-green-text">
            Fresh. Local. 
            <br/>
            Human Powered.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Here at First Acre Farm, we produce a variety of seasonal vegetables, including our speciality - fresh salad greens and salad materials. 
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="about" className="py-20">
      <div className="mx-auto my-auto lg:flex">
        <div className="lg:w-1/2">
          <AboutImage />
        </div>
        <div className="px-10 text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight dark-green-text">About the Farm</h2>
          <p className="mt-4 text-xl font-light">
            First Acre Farm was established in 2020 on the premise that bigger is not better.  
            By a combination of traditional farm practices and modern techniques a bountiful harvest can be had from a very small area, perhaps the very first acre.  
            By staying small, we can provide the extra attention needed to produce a variety of very high quality crops.  
            We don’t do any spraying of any kind.  
            No pesticides.  No herbicides. 
            Tilling the soil is still something we keep in the tool belt, but we strive to use it sparingly and hope to eliminate it altogether very soon.  
          <br/>
          <br/>
            We believe small farms benefit communities by bridging relationships between grower and eater.  
            Schedule a tour if you’d like to learn more about our methods or crops or simply put a face to your farmer.  
          </p>
        </div> 
      </div>
    </section>
    <section id="products">
      <div className="container mx-auto text-center pb-10">
        <h2 className="text-3xl lg:text-4xl font-semibold">Seasonal Products</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 background-green">
              <p className="font-semibold text-xl">Greens</p>
              <p className="mt-4">
                spring mix, head lettuce, spinach, arugula, Asian greens, et cetera
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 background-green">
              <p className="font-semibold text-xl">Vegetables</p>
              <p className="mt-4">
                tomatoes, cucumbers, onions, radishes, turnips, carrots, et cetera
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 background-green">
              <p className="font-semibold text-xl">Herbs</p>
              <p className="mt-4">
                basil, cilantro, dill, thyme, oregano, Mexican mint, parsley, et cetera
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="where">
      <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold dark-green-text">Where to Find Us</h2>
      
      <Card className="background-green py-0 lg:px-16 mt-12 mb-20">

      <div className="container mx-auto lg:px-24 items-center flex flex-col lg:flex-row my-20">
        <div className="p-15 lg:w-1/3 hidden md:block">
          <MarketIcon />
        </div>
        <div className="lg:w-2/3 lg:pl-20 xl:pl-24">
            <h3 className="text-3xl font-semibold leading-tight text-left">
              Westside Farmers Market - St. Paul  
            </h3>
             <p className="mt-4 text-xl font-light text-left dark-green-text">
              Saturdays | 8:30am - 12:30pm
              <br/>
              June - October 
              <br/>  
              63 George St. West
            </p>
        </div>
      </div>

      <div className="container mx-auto lg:px-16 items-center flex flex-col lg:flex-row my-20">
        <div className="lg:w-2/3 lg:pr-20 xl:pr-24">
          <h3 className="text-3xl font-semibold leading-tight text-right">
            Shop Online  
          </h3>
            <p className="mt-4 text-lg font-light text-justify dark-green-text">
              Individuals at high risk for contracting COVID-19 or those who cannot attend the Westside Farmers Market should use our online store to pre-order.  
              <br/>
              <Card className="text-sm lg:ml-20 mt-4 p-5" >
              <h4 className="text-xl">Options: </h4>
              <ul className="text-justify">
                <li>Free pickup at the Saturday market. </li> 
                <li>Free Saturday pickup at the Farm. </li>
                <li>Saturday afternoon delivery to Twin Cities or Amery, WI area for orders over $30. </li>
              </ul>
              </Card>
              <p className="mt-4 text-lg font-light text-right dark-green-text">
                Orders must be submitted by Thurs.i at midnight.
                <br/> Online ordering is closed Friday - Saturday.
              </p>
              <div className="text-right">
                <Button className="text-sm shop-button">Our Online Shop</Button>
              </div>
            </p>
        </div>
        <div className="lg:w-1/3 p-15 hidden md:block">
          <StoreIcon />
        </div>
      </div>

      <div className="container mx-auto lg:px-16 items-center flex flex-col lg:flex-row my-20">
        <div className="lg:w-1/3 hidden md:block p-15">
          <BasketIcon />
        </div>
      <div className="lg:w-2/3 lg:pl-20 xl:pl-24">
            <h3 className="text-3xl font-semibold leading-tight text-left ">
              Pack the Pantry Fall CSA   
            </h3>
             <p className="mt-4 text-xl font-light text-justify dark-green-text">
              In response to COVID-19 pandemic, we are exploring a CSA style pre-order of 1-2 large boxes of produce to be distributed in early fall.  They would contain mostly storage crops such as potatoes, carrots, cabbage.  
              <br/>
              <br/>Contact andy@firstacrefarm.com 
            </p>
        </div>
      </div>
     <div className="container mx-auto lg:px-16 items-center flex flex-col lg:flex-row my-20">
        <div className="lg:w-2/3 lg:pr-20 xl:pr-24">
            <h3 className="text-3xl font-semibold leading-tight text-right ">
              Wholesale Inquiries   
            </h3>
             <p className="mt-4 text-xl font-light text-right dark-green-text">
              Contact andy@firstacrefarm.com 
            </p>
        </div>
        <div className="lg:w-1/3 p-15 hidden md:block">
          <SaleIcon />
        </div>
      </div>
      </Card>
      </div>

    </section>

  
  </Layout>
);
