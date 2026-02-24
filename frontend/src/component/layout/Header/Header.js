import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Grocer" className="logo-img" />
        </Link>
        <Link to="/" className="logo-text">Grocer</Link>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search products..." />
        <SearchIcon className="search-icon" />
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      <div className="header-icons">
        <Link to="/login" className="icon-link">
          <PersonIcon />
        </Link>
        <Link to="/cart" className="icon-link">
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
