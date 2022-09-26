import React from 'react';
import './Product.css';
import { useStateValue } from '../contextapi/StateProvider';

function Product({ id, title, image, price, rating}) {
   
  const [ {}, dispatch] = useStateValue();  // Get the value from the ContextAPI
  const addToBasket = () => {
    // Add item to basket ....
    dispatch({              // this will fire the ADD_TO_BASKET Action in the ContextAPI StateProvider object
        type: 'ADD_TO_BASKET',
        item: {      // this is the payload data to be dispatched
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }   
    })
        
  };
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map( (_) => (
                        <p>⭐️</p>
                    ) )
                }
            </div>
        </div>
        
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product