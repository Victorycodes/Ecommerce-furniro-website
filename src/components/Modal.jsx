import React from "react";
import { products } from "../utils/products";
import CloseCart from "../assets/images/icons/closeCart.svg";
import RemoveIcon from "./RemoveIcon";
import "../css/Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ removeItem, closeModal, cart }) => {
  const navigate = useNavigate();
  const cartItems = Array.isArray(cart) ? cart : [];

  const calculateSubtotal = () => {
    return cart
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const goToCartPage = () => {
    closeModal();
    navigate("/cart");
  };

  const goToComparePage = () => {
    closeModal();
    navigate("/product-comparison");
  };

  const goToCheckoutPage = () => {
    closeModal();
    navigate("/checkout");
  };

  return (
    <>
      <div className="modalOverlay absolute bg-[white] flex flex-col desktop:w-[30%] w-[100%] desktop:left-[70%] right-[0px] desktop:top-[10px] top-[0px] z-[999] ">
        <div className="desktop:w-[80%] w-[90%] desktop:m-[auto] mx-auto mt-[10px]">
          <div className="flex items-center justify-between desktop:mb-[20px] mb-[10px]">
            <h1 className="desktop:text-[24px] text-[18px] desktop:font-[600] font-[500]">
              Shopping Cart
            </h1>
            <div onClick={closeModal} className="cursor-pointer">
              <img src={CloseCart} alt="" />
            </div>
          </div>
          <hr />
          <div className="cartItemDesc desktop:mt-[30px] mt-[5px]">
            <ul>
              {cartItems.length === 0 ? (
                <li className="desktop:text-[16px] text-[14px]">
                  Your cart is empty.
                </li>
              ) : (
                cartItems.map((product) => (
                  <li
                    className="flex items-center pb-[20px] justify-between desktop:gap-0 gap-[30px]"
                    key={product.id}
                  >
                    <div className="flex items-center gap-[30px]">
                      <div>
                        <img
                          src={product.src}
                          className="desktop:w-[111px] w-[75px] desktop:h-[90px] h-[70px] rounded-[5px]"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[16px]">{product.name}</h1>
                        <div className="flex items-center">
                          <p className="text-[16px] mr-[5px] font-light">
                            {product.quantity}
                          </p>
                          <p className="text-[12px] mr-[5px] font-light">X</p>
                          <p className="text-[12px] font-[500] text-[#B88E2F]">
                            Rp{product.price * 1000}.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <RemoveIcon
                        className="removeIcon cursor-pointer"
                        onClick={() => removeItem(product.id)}
                      />
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <div className="desktop:mb-[25px] mb-[10px]">
              <p className="desktop:text-[16px] text-[14px]">Subtotal</p>
              <p></p>
            </div>
            <hr />
            <div className="flex desktop:my-[25px] mt-[10px] justify-between">
              <button
                onClick={goToCartPage}
                className="text-[12px] desktop:py-[15px] py-[5px] desktop:px-[30px] px-[15px] rounded-[18px] border-[#000000] border-[1px] cursor-pointer"
              >
                Cart
              </button>
              <button
                onClick={goToCheckoutPage}
                className="text-[12px] desktop:py-[15px] py-[5px] desktop:px-[30px] px-[15px] rounded-[18px] border-[#000000] border-[1px] cursor-pointer"
              >
                Checkout
              </button>
              <button
                onClick={goToComparePage}
                className="text-[12px] desktop:py-[15px] py-[5px] desktop:px-[30px] px-[15px] rounded-[18px] border-[#000000] border-[1px] cursor-pointer"
              >
                Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
