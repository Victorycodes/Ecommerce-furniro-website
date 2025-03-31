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
        <div className="flex justify-center">
          <div className="bgImg absolute desktop:top-[130px] top-[28px]">
            <div className="flex justify-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div className="logoIconHead">
            <h1 className="text-center desktop:text-5xl text-[24px]	font-medium desktop:mb-[8px]">
              Cart
            </h1>
            </div>
            <p className="flex items-center justify-center desktop:mt-[0px] mt-[-8px]">
              <span className="font-medium desktop:text-[16px] text-[12px]">
                Home
              </span>
              <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
              <span className="font-light desktop:text-[16px] text-[12px]">
                Cart
              </span>
            </p>
          </div>
        </div>
        <div className="w-[100%] gap-[40px] flex desktop:flex-row flex-col justify-center desktop:mt-[70px] mt-[30px]">
          <div className="desktop:w-[60%] w-[95%] desktop:mx-0 mx-[auto]">
            {cart.length === 0 ? (
              <div className="text-center text-lg font-medium py-4">
                Your cart is empty.
              </div>
            ) : (
              <>
                <ul className="desktop:text-[16px] text-[12px] flex justify-around desktop:py-4 py-2 border-b bg-[#F9F1E7] p-4 rounded-lg shadow-md">
                  <li className="font-semibold">Product</li>
                  <li className="font-semibold">Price</li>
                  <li className="font-semibold">Quantity</li>
                  <li className="font-semibold">Subtotal</li>
                </ul>

                {cart.map((item, index) => (
                  <ul
                    key={index}
                    className="bg-[#ffffff] flex justify-between items-center py-4 desktop:text-[16px] text-[14px] border-b"
                  >
                    <div className="flex gap-[20px] items-center">
                      <li>
                        <img
                          className="desktop:w-[108px] w-[85px] desktop:h-[105px] h-[85px]"
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
          <div className="desktop:w-[30%] w-[95%]  desktop:mx-0 mx-[auto] py-[15px] bg-[#F9F1E7] desktop:px-0 px-[20px]">
            <p className="desktop:text-center text-left desktop:text-[32px] text-[24px] font-semibold desktop:pb-[50px] pb-[20px]">
              Cart Totals
            </p>
            <div className="desktop:justify-center justify-between flex gap-[50px] mb-2 desktop:pb-[30px] pb-[15px]">
              <span className="font-medium">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="desktop:justify-center justify-between flex gap-[50px] mb-4 pb-[30px]">
              <span className="font-medium">Total:</span>
              <span className="font-medium text-[20px] text-[#B88E2F]">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center">
              <button className="desktop:py-[18px] py-3 desktop:px-[35px] px-10 rounded-[12px] border-[#000000] border-[1px] cursor-pointer desktop:w-[50%] w-full">
                <p className="desktop:text-[20px] text-[14px]">Checkout</p>
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
