import React from "react";
import "./Subtotal.css";
//import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../contextapi/StateProvider";
import { getBasketTotal } from "./../contextapi/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useNavigate();

  const formatCurrency = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  return (
    <div className="subtotal">
    
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;