import React from 'react';
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../contextapi/StateProvider';
import './Checkout.css';
import Subtotal from '../components/Subtotal';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <Header />
          <h3>Hello, {user.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
      { basket.length > 0 && (
          <div>
             <Subtotal />
          </div>
      )}
    </div>
  );
}

export default Checkout;