import React from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/account-alert-outline.png";
import Search from "../assets/images/icons_search.png";
import Heart from "../assets/images/icons_heart.png";
import Cart from "../assets/images/shopping-cart.png";
import "../css/Header.css";

const Header = ({ setCurrentPage }) => {
  return (
    <header className="headerWrapper">
      <div>
        <img src={Logo} alt="Logo" className="homeLogo" />
      </div>
      <nav>
        <ul className="homeList my-[20px]">
          <button onClick={() => setCurrentPage("home")}>
            <li>Home</li>
          </button>
          <button onClick={() => setCurrentPage("shop")}>
            <li>Shop</li>
          </button>
          <button onClick={() => setCurrentPage("about")}>
            <li>About</li>
          </button>
          <button onClick={() => setCurrentPage("contact")}>
            <li>Contact Us</li>
          </button>
        </ul>
      </nav>
      <div className="headerIcon">
        <img
          src={Profile}
          alt="Profile icon"
          className="homeIcon cursor-pointer"
        />
        <img
          src={Search}
          alt="Search icon"
          className="homeIcon cursor-pointer"
        />
        <img src={Heart} alt="Heart icon" className="homeIcon cursor-pointer" />
        <img src={Cart} alt="Cart icon" className="homeIcon cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
