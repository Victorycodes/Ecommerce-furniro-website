import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/account-alert-outline.png";
import Search from "../assets/images/icons_search.png";
import Heart from "../assets/images/icons_heart.png";
import Cart from "../assets/images/shopping-cart.png";
import HamburgerBtn from "../assets/images/icons/hamburger.png";
import CloseBtn from "../assets/images/icons/close.png";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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
    <header className="headerWrapper sticky top-0 z-20 border-b border-default-200 bg-white transition-all nav-sticky p-[5px]">
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

      <div className="logoImg">
        <img src={Logo} alt="Logo" className="homeLogo" />
      </div>

      <div className="headerNav">
        <nav className={`menuContent ${isNavOpen ? "open" : ""}`}>
          <ul className="homeList">
            <button
              onClick={() => {
                setActiveTab("home");
                navigate("/");
              }}
            >
              <li className={activeTab === "home" ? "active" : ""}>Home</li>
            </button>
            <button
              onClick={() => {
                setActiveTab("shop");
                navigate("/shop");
              }}
            >
              <li className={activeTab === "shop" ? "active" : ""}>Shop</li>
            </button>
            <button
              onClick={() => {
                setActiveTab("about");
              }}
            >
              <li className={activeTab === "about" ? "active" : ""}>About</li>
            </button>
            <button
              onClick={() => {
                setActiveTab("contact");
                navigate("/contact");
              }}
            >
              <li className={activeTab === "contact" ? "active" : ""}>
                Contact Us
              </li>
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
            <div className="text-[red] desktop:text-[25px] text-[18px]">{cart.length}</div>
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
