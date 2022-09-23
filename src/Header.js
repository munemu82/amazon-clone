import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <nav className="header">
        {/* logo on the left  */ }
        <Link to="/">
            <img className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
            />
        </Link>
       
        {/* search box in the middle */ }
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon  className="header__searchIcon" />
        </div>
        
        {/* 3 links on the right  */ }
        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Amos</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                     <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                 </div>
            </Link>
        </div>
        {/* Basket icon with number  */ }
    </nav>
  )
}

export default Header