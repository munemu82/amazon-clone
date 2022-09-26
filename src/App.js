import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
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
