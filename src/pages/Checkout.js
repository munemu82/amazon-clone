import React from 'react';
import Header from '../components/Header';
import { useStateValue } from '../contextapi/StateProvider';
import './Checkout.css';


function Checkout() {
  const [ { basket }] = useStateValue();   // pull the basket data from the ContextAPI store
  return (
    <div className='checkout'>
      <Header />
      <img className='checkout__ad' 
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg'
        alt=''
      />
      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy or order, click "Add to basket" next to the item.
          </p>
        </div>
          
      ): (
        <div>
          <h2>Your Shopping Basket</h2>
        </div>

      )}
        </div>
  )
}

export default Checkout