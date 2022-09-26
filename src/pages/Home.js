import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import './Home.css';

function Home() {
  return (
    <div >
      <Header />
      <div className="home">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
        <div className='home__row'>
        <Product 
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product 
          id="12321342"
          title="Transformative: Build a Game-changing Strategy, Retool Your Organization, and Innovate to Win
          by William Kilmer | Sep 27, 2022"
          price={30.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/41z5NDVi2QL._AC_UY218_.jpg"
        />
        </div>

        <div className='home__row'>
        <Product 
          id="12321343"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Previous Model)"
          price={359.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY218_.jpg"
        />
        <Product 
          id="12321345"
          title="Samsung CF390 24' 16:9 Curved LCD FHD 1920x1080 Curved Desktop Black Monitor for Multimedia, Personal, Business, HDMI, VGA, VESA Mountable, Eye Saver Mode & Flicker Free Technology (LC24F390FH)"
          price={219.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/8187g8eA8UL._AC_UY218_.jpg"
        />
         <Product 
          id="12321341"
          title="SVEWT Stand Mixer 660W 6+1 Speeds Tilt-Head Food Mixer, Kitchen Electric Mixers with 8.5-QT Stainless Steel Mixing Bowl, Dough Hook, Wire Whisk, and Beater Attachments for Most Home Cooks"
          price={169.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71YH5VLHDwL._AC_SX679_.jpg"
        />
        </div>

        <div className='home__row'>
        <Product 
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        </div>
      </div>
    </div>
  )
}

export default Home;