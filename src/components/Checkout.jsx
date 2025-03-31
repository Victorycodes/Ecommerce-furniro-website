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
          <div className="bgImg absolute desktop:top-[130px] top-[28px]">
            <div className="flex justify-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div className="logoIconHead">
              <h1 className="text-center desktop:text-5xl text-[24px]	font-medium desktop:mb-[8px]">
                Checkout
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center desktop:mt-[0px] mt-[-8px]">
                <span className="font-medium desktop:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light desktop:text-[16px] text-[12px]">
                  Checkout
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="desktop:mt-[50px] mt-[20px]">
          <p className="font-semibold desktop:text-[36px] text-[24px] desktop:mb-[30px] mb-[20px] desktop:ml-[70px] ml-[30px]">
            Billing Details
          </p>
          <div className="flex w-[100%] desktop:flex-row flex-col justify-around">
            <div className="desktop:w-[40%] w-[95%] desktop:mx-0 mx-auto">
              <form className="flex flex-col desktop:w-[100%] w-[90%] desktop:mx-0 laptop:mx-0 mx-auto">
                <div className="flex justify-between desktop:flex-row flex-col">
                  <div className="mb-[20px]">
                    <label className="font-medium desktop:text-[16px] text-[14px]">
                      First Name
                    </label>
                    <br />
                    <input
                      className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                      type="text"
                    />
                  </div>
                  <div className="mb-[20px]">
                    <label className="font-medium desktop:text-[16px] text-[14px]">Last Name</label>
                    <br />
                    <input
                      className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">
                    Company Name (Optional)
                  </label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">
                    Country / Region
                  </label>
                  <br />
                  <select
                    className=" desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] text-[#9F9F9F] px-[20px]"
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
                  <label className="font-medium desktop:text-[16px] text-[14px]">
                    Street address
                  </label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">Town / City</label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">Province</label>
                  <br />
                  <select
                    className=" desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] text-[#9F9F9F] px-[20px]"
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
                  <label className="font-medium desktop:text-[16px] text-[14px]">ZIP Code</label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="number"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">Phone</label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="number"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium desktop:text-[16px] text-[14px]">
                    Email address
                  </label>
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="email"
                  />
                </div>
                <div className="mb-[20px]">
                  <br />
                  <input
                    className="outline-none  desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    placeholder="Additional Information"
                    type="text"
                  />
                </div>
              </form>
            </div>
            <div className="desktop:w-[40%] w-[95%] desktop:mx-0 mx-auto">
              <div className="flex justify-between desktop:mb-[30px] mb-[15px]">
                <div className="desktop:ml-0 ml-[30px]">
                  <p className="font-medium desktop:text-[24px] text-[20px]">Product</p>
                  <p className="text-[#9F9F9F]">Asgaard sofa</p>
                  <p className="text-[#9F9F9F]">Subtotal</p>
                </div>
                <div>
                  <p className="font-medium desktop:text-[24px] text-[20px]">Subtotal</p>
                  <p className="font-light">Rs. 250,000.00</p>
                  <p className="font-light">Rs. 250,000.00</p>
                  <p className="font-bold desktop:text-[24px] text-[18px] text-[#B88E2F]">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>
              <hr />
              <div className="mt-[20px]">
                <div>
                  <div className="flex gap-[15px]">
                    <input type="radio" name="" id="" checked />
                    <label>Direct Bank Transfer</label>
                  </div>
                  <p className="font-light text-[#9F9F9F] mb-[20px] desktop:w-[100%] laptop:w-[100%] w-[86%] desktop:mx-0 laptop:mx-0 mx-auto">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <div className="flex gap-[15px] mb-[15px]">
                  <input type="radio" name="" id="" />
                  <label>Direct Bank Transfer</label>
                </div>
                <div className="flex gap-[15px]  mb-[25px]">
                  <input type="radio" name="" id="" />
                  <label>Cash Delivery </label>
                </div>
              </div>
              <p className="desktop:w-[100%] laptop:w-[100%] w-[86%] desktop:mx-0 laptop:mx-0 mx-auto">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-bold">privacy policy.</span>
              </p>
              <div className="flex justify-center mt-[30px]">
                <button className="py-[15px] px-[40px] rounded-[8px] border-[#000000] border-[1px] cursor-pointer desktop:w-[60%] w-full">
                  <p className="desktop:text-[20px] text-[16px]">Place Order</p>
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
