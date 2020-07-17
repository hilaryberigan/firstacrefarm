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
import FlyerDownloadFile from '../../static/CsaFlyer.js';
import MainTitle from '../components/MainTitle'

export default () => (
  <Layout>
    <section>
      <div className="mx-auto my-auto lg:flex background-green">
        <div className="lg:px-10 lg:py-20 py-2 lg:text-left lg:w-1/2">
          <MainTitle className="md:text-4xl lg:text-5xl xl:text-6xl text-xl font-bold leading-none dark-green-text text-center lg:text-left" />
          <p className="text-xl lg:text-2xl mt-6 font-light hidden lg:block">
            Here at First Acre Farm, we produce a variety of seasonal vegetables, including our speciality - fresh salad greens and salad ingredients. 
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>

    </section>
    <div className="px-4 lg:px-0">
    <section id="about" className="lg:mt-12 mt-8">
      <div className="mx-auto my-auto lg:flex">
        <div className="lg:w-1/2 hidden lg:block">
          <AboutImage />
        </div>
        <div className="lg:px-10 px-5 text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-semibold leading-tight dark-green-text">About the Farm</h2>
          <p className="mt-4 lg:text-lg md:text-md font-light text-left">
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
      <div className="container mx-auto text-center mt-8 lg:mt-12">
        <h2 className="text-2xl lg:text-4xl font-semibold">Seasonal Products</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-6 lg:mt-12">
          <div className="flex-1 px-3 mb-1">
            <Card className="background-green">
              <p className="font-semibold text-xl">Greens</p>
              <p className="lg:mt-4 mt-2">
                spring mix, head lettuce, spinach, arugula, Asian greens, et cetera
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3 mb-1">
            <Card className="background-green">
              <p className="font-semibold text-xl">Vegetables</p>
              <p className="lg:mt-4 mt-2">
                tomatoes, cucumbers, onions, radishes, turnips, carrots, et cetera
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3 mb-1">
            <Card className="background-green">
              <p className="font-semibold text-xl">Herbs</p>
              <p className="lg:mt-4 mt-2">
                basil, cilantro, dill, thyme, oregano, Mexican mint, parsley, et cetera
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="where">
      <div className="container mx-auto text-center lg:mt-12 mt-8">
        <h2 className="text-2xl lg:text-4xl font-semibold dark-green-text">Where to Find Us</h2>
        <div className="flex flex-col sm:flex-row lg:mt-12 mt-4 grid grid-cols-2 gap-4">
          <div className="flex-1 px-1 lg:px-3 row-span-1 col-span-1">
            <Card className="background-green h-full mb-10 lg:mb-0">

              <div className="container mx-auto items-center flex flex-col lg:flex-row">
                <div className="lg:w-1/3 w-1/2 lg:p-3">
                  <MarketIcon />
                </div>
                <div className="lg:w-2/3 mt-2 lg:mt-0 lg:p-3">
                  <h4 className="text-lg lg:text-2xl font-semibold leading-tight">
                    Westside Farmers Market - St. Paul  
                  </h4>
                  <p className="m2-4 text-md font-light dark-green-text">
                    Saturdays | 8:30am - 12:30pm
                    <br/>
                    June - October 
                    <br/>  
                    63 George St. West
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-1 px-1 lg:px-3 row-span-1 col-span-1">
            <Card className="background-green h-full">

              <div className="container mx-auto items-center flex flex-col lg:flex-row">
                <div className="lg:w-1/3 w-1/2 lg:p-3">
                  <SaleIcon />
                </div>
                <div className="lg:w-2/3 mt-2 lg:mt-0 lg:p-3">
                  <h4 className="text-lg lg:text-2xl font-semibold leading-tight">
                    Wholesale Inquiries   
                  </h4>
                  <p className="m2-4 text-md font-light dark-green-text">
                  Contact andy@firstacrefarm.com 
                </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="csa">
      <div className="container mx-auto text-center lg:mt-12 mt-8">
        <h2 className="text-2xl lg:text-4xl font-semibold dark-green-text">Pack the Pantry Fall CSA Box</h2>
        <h4 className="text-sm lg:text-lg"> Pickup: October 10 | October 24 </h4>
        <div className="container mx-auto items-center flex flex-col lg:flex-row ">
          <div className="w-1/3 container lg:mb-48">
            <BasketIcon />
          </div>  
          <div className="lg:w-2/3 lg:mt-12 text-left mb-20">
            
            <div className="pl-5">
            <h3 className="text-xl lg:text-2xl dark-green-text"> What is CSA?</h3>
            <p className="mt-3 lg:text-lg md:text-md font-light text-left leading-3">

              CSA (Community Supported Agriculture) is a
              model where you pre-order pre-assembled
              boxes of veggies to be delivered to your
              neighborhood drop site on predetermined
              dates. We share the risks and rewards of the
              season. This means if we have a bumper year
              for carrots (for example), your box may find
              extra carrots. Alternatively, if it’s a tough year
              for cabbage (for example), you might not get
              much or any cabbage. In any case, we’ll
              provide you two very high quality boxes
              worth at least $50 each. 

              </p>
              <br/>
              <h3 className="text-xl lg:text-2xl mt-2 lg:mt-4 dark-green-text">Box Contents</h3>
              <p className="mt-3">
              Broccoli • Salad Greens • Cooking Greens • Radishes • Salad Turnips • Cabbage • Napa Cabbage • Potatoes
              • Onion • Garlic • Carrots • Beets • Winter Squash
              <br/>
              <br/>
              Check out our&nbsp; 
              <FlyerDownloadFile className="grey underline"/> for more details.
              </p>
            <br/>
            <br/>
            
            <Button className="shop-button"> Fall CSA Sign Up </Button>
            <br/>
            <br/>

          </div>
          </div>
        </div>
      </div>
    </section>
</div>
  
  </Layout>
);
