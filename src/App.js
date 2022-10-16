import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import React, { useEffect, Component }  from 'react';
import { auth } from "./firebase/firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useStateValue } from "./contextapi/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51Ls1kYFfjpoMUntHYUtnzKdeJRPIp7zW0XFM4SPgfAnRIaQq6dPZ2eQH0V5c8HxVI01LtcyYwc0f3rKll8YBg3xu00FxgZPyo6"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/payment" element={
            <Elements stripe={promise}>
            <Payment />
          </Elements>
        } /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
      
    </Router>

  );
}

export default App;