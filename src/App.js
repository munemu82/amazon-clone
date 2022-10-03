import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import React, { useEffect, Component }  from 'react';
import { auth } from "./firebase/firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useStateValue } from "./contextapi/StateProvider";

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
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
      
    </Router>

  );
}

export default App;