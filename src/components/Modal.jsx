import React from "react";
import { products } from "../utils/products";
import CloseCart from "../assets/images/icons/closeCart.svg";
import RemoveIcon from "./RemoveIcon";
import "../css/Modal.css"

const Modal = ({ removeItem, closeModal, cart }) => {
  const product = products;

  return (
    <>
      <div className="modalOverlay absolute bg-[white] flex flex-col w-[30%] left-[70%]">
        <div className=" w-[80%] m-[auto]">
          <div className="flex items-center justify-between mb-[20px]">
            <h1 className="text-[24px] font-[600]">Shopping Cart</h1>
            <div onClick={closeModal} className="cursor-pointer">
              <img src={CloseCart} alt="" />
            </div>
          </div>
          <hr />
          <div className="cartItemDesc mt-[30px]">
            <ul>
              {cart.length === 0 ? (
                <li>Your cart is empty.</li>
              ) : (
                cart.map((product) => (
                  <li
                    className="flex items-center pb-[20px] justify-between"
                    key={product.id}
                  >
                    <div>
                      <img
                        src={product.src}
                        className="w-[111px] h-[90px] rounded-[5px]"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-[16px]">{product.name}</h1>
                      <p className="text-[12px] font-[500] text-[#B88E2F]">
                        Rp{product.price * 1000}.00{" "}
                      </p>
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
        </div>
      </div>
    </>
  );
};

export default Modal;
