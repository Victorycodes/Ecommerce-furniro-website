import React, { useEffect, useState } from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import SubFooter from "./sub_footer";
import "../css/Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    setCart(Array.isArray(parsedCart) ? parsedCart : []);
  }, []);

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
          <div className="bgImg absolute xl2:top-[130px] top-[130px]">
            <div className="flex justify-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div>
              <h1 className="text-center xl2:text-5xl text-[24px]	font-medium xl2:mb-[8px]">
                Checkout
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center">
                <span className="font-medium xl2:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light xl2:text-[16px] text-[12px]">
                  Checkout
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <p className="font-semibold text-[36px] mb-[30px] ml-[70px]">
            Billing Details
          </p>
          <div className="flex w-[100%] justify-around">
            <div className="w-[40%]">
              <form className="flex flex-col w-[100%] ">
                <div className="flex gap-[30px]">
                  <div className="mb-[20px]">
                    <label className="font-medium text-[16px]">
                      First Name
                    </label>
                    <br />
                    <input
                      className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                      type="text"
                    />
                  </div>
                  <div className="mb-[20px]">
                    <label className="font-medium text-[16px]">Last Name</label>
                    <br />
                    <input
                      className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">
                    Company Name (Optional)
                  </label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">
                    Country / Region
                  </label>
                  <br />
                  <select
                    className="h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] text-[#9F9F9F] px-[20px]"
                    name="country"
                    id="country"
                  >
                    <option className="text-[#9F9F9F]" value="nigeria">
                      Nigeria
                    </option>
                    <option className="text-[#9F9F9F]" value="ghana">
                      Ghana
                    </option>
                    <option className="text-[#9F9F9F]" value="usa">
                      USA
                    </option>
                  </select>
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">
                    Street address
                  </label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Town / City</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Province</label>
                  <br />
                  <select
                    className="h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] text-[#9F9F9F] px-[20px]"
                    name="country"
                    id="country"
                  >
                    <option className="text-[#9F9F9F]" value="nigeria">
                      Western Province
                    </option>
                    <option className="text-[#9F9F9F]" value="ghana">
                      Southern Province
                    </option>
                    <option className="text-[#9F9F9F]" value="usa">
                      Northern Province
                    </option>
                    <option className="text-[#9F9F9F]" value="usa">
                      Eastern Province
                    </option>
                  </select>
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">ZIP Code</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="number"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Phone</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="number"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">
                    Email address
                  </label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="email"
                  />
                </div>
                <div className="mb-[20px]">
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    placeholder="Additional Information"
                    type="text"
                  />
                </div>
              </form>
            </div>
            <div className="w-[40%]">
              <div className="flex justify-between mb-[30px]">
                <div>
                  <p className="font-medium text-[24px]">Product</p>
                  <p className="text-[#9F9F9F]">Asgaard sofa</p>
                  <p className="text-[#9F9F9F]">Subtotal</p>
                </div>
                <div>
                  <p className="font-medium text-[24px]">Subtotal</p>
                  <p className="font-light">Rs. 250,000.00</p>
                  <p className="font-light">Rs. 250,000.00</p>
                  <p className="font-bold text-[24px] text-[#B88E2F]">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>
              <hr />
              <div className="mt-[20px]">
                <div>
                  <div className="flex gap-[15px]">
                    <input type="radio" name="" id="" />
                    <label>Directoutline-none Bank Transfer</label>
                  </div>
                  <p className="font-light text-[#9F9F9F] mb-[20px]">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <div className="flex gap-[15px] mb-[15px]">
                  <input type="radio" name="" id="" />
                  <label>Directoutline-none Bank Transfer</label>
                </div>
                <div className="flex gap-[15px]  mb-[25px]">
                  <input type="radio" name="" id="" />
                  <label>Cash Ooutline-none n Delivery </label>
                </div>
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-bold">privacy policy.</span>
              </p>
              <div className="flex justify-center mt-[30px]">
                <button className="py-[15px] px-[40px] rounded-[8px] border-[#000000] border-[1px] cursor-pointer">
                  <p className="text-[20px]">Place Order</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default Checkout;
