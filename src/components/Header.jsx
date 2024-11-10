import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/account-alert-outline.png";
import Search from "../assets/images/icons_search.png";
import Heart from "../assets/images/icons_heart.png";
import Cart from "../assets/images/shopping-cart.png";
import HamburgerBtn from "../assets/images/icons/Hamburger.png";
import CloseBtn from "../assets/images/icons/close.png";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCart(savedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart({});
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="headerWrapper relative">
      <div onClick={toggleNav} className="menuIcon cursor-pointer">
        {isNavOpen ? (
          <img
            src={CloseBtn}
            alt=""
            className={`closeBtn ${isNavOpen ? "show" : ""}`}
          />
        ) : (
          <img src={HamburgerBtn} alt="" className="hamburgerBtn" />
        )}
      </div>

      <div>
        <img src={Logo} alt="Logo" className="homeLogo" />
      </div>

      <div className="headerNav">
        <nav className={`menuContent ${isNavOpen ? "open" : ""}`}>
          <ul className="homeList my-[20px]">
            <button onClick={() => navigate("/")}>
              <li>Home</li>
            </button>
            <button onClick={() => navigate("/shop")}>
              <li>Shop</li>
            </button>
            <button onClick={() => navigate("/about")}>
              <li>About</li>
            </button>
            <button onClick={() => navigate("/contact")}>
              <li>Contact Us</li>
            </button>
          </ul>
        </nav>
      </div>
      <div className="headerIcon">
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
          <img
            src={Heart}
            alt="Heart icon"
            className="homeIcon cursor-pointer"
          />
          <div className="flex items-center">
            <img
              src={Cart}
              alt="Cart icon"
              onClick={openModal}
              className="homeIcon cursor-pointer"
            />
            <div className="text-[red] text-[25px]">{cart.length}</div>
          </div>
        </div>
        {showModal && (
          <Modal
            clearCart={clearCart}
            removeItem={removeItem}
            cart={cart}
            closeModal={closeModal}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
