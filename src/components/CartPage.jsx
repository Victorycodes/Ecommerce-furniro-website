import React, { useEffect, useState } from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import WasteBin from "../assets/images/icons/wasteBin.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import SubFooter from "./sub_footer";
import "../css/CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    setCart(Array.isArray(parsedCart) ? parsedCart : []);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const total = subtotal;
    return { subtotal, total };
  };

  const { subtotal, total } = calculateTotal();
  return (
    <>
      <div>
        <img src={ShopBg} alt="" />
        <div className="bgImg absolute xl2:left-[50%] left-[40%] xl2:top-[130px] top-[130px]">
          <div className="flex justify-center">
            <img src={LogoIcon} alt="" />
          </div>
          <h1 className="text-center xl2:text-5xl text-[24px]	font-medium xl2:mb-[8px]">
            Cart
          </h1>
          <p className="flex items-center justify-center">
            <span className="font-medium xl2:text-[16px] text-[12px]">
              Home
            </span>
            <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
            <span className="font-light xl2:text-[16px] text-[12px]">Cart</span>
          </p>
        </div>
        <div className="w-[100%] gap-[40px] flex justify-center mt-[70px]">
          <div className="w-[60%]">
            {cart.length === 0 ? (
              <div className="text-center text-lg font-medium py-4">
                Your cart is empty.
              </div>
            ) : (
              <>
                <ul className="flex justify-around py-4 border-b bg-[#F9F1E7] p-4 rounded-lg shadow-md">
                  <li className="font-semibold">Product</li>
                  <li className="font-semibold">Price</li>
                  <li className="font-semibold">Quantity</li>
                  <li className="font-semibold">Subtotal</li>
                </ul>

                {cart.map((item, index) => (
                  <ul
                    key={index}
                    className="bg-[#ffffff] flex justify-between items-center py-4 border-b"
                  >
                    <div className="flex gap-[20px] items-center">
                      <li>
                        <img
                          className="w-[108px] h-[105px]"
                          src={item.src}
                          alt=""
                        />
                      </li>
                      <li className="text-[#9F9F9F]">{item.name}</li>
                    </div>
                    <li className="text-[#9F9F9F]">${item.price.toFixed(2)}</li>
                    <li className="py-[5px] px-[12px] rounded-[8px] border-[#000000] border-[1px]">
                      {item.quantity}
                    </li>
                    <li>${(item.price * item.quantity).toFixed(2)}</li>
                    <li>
                      <img
                        onClick={() => removeItem(item.id)}
                        src={WasteBin}
                        alt=""
                      />
                    </li>
                  </ul>
                ))}
              </>
            )}
          </div>
          <div className="w-[30%] py-[15px] bg-[#F9F1E7]">
            <p className="text-center text-[32px] font-semibold pb-[50px]">
              Cart Totals
            </p>
            <div className="justify-center flex gap-[50px] mb-2 pb-[30px]">
              <span className="font-medium">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="justify-center flex gap-[50px] mb-4 pb-[30px]">
              <span className="font-medium">Total:</span>
              <span className="font-medium text-[20px] text-[#B88E2F]">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center">
              <button className="py-[18px] px-[35px] rounded-[12px] border-[#000000] border-[1px] cursor-pointer">
                <p className="text-[20px]">Checkout</p>
              </button>
            </div>
          </div>
        </div>
        <SubFooter />
      </div>
    </>
  );
};

export default CartPage;
