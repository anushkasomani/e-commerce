import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Header.css';

import {Link} from "react-router-dom";


const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>E-Shop</h1>
      </div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          
          <li><Link to="/curr">Currency Converter</Link></li>
        </ul>
      </nav>
      <div className="cart">
       
          <Link to='/cart'>
          <span >Cart ({cartItems.length})</span>
          </Link>
       
      </div>
    </header>
  );
};

export default Header;
