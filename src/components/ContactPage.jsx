import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import AddressIcon from "../assets/images/icons/address.svg";
import PhoneIcon from "../assets/images/icons/phone.svg";
import WorkingTimeIcon from "../assets/images/icons/working_time.svg";
import SubFooter from "./sub_footer";

const ContactPage = () => {
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
                Contact
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center">
                <span className="font-medium xl2:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light xl2:text-[16px] text-[12px]">
                  Contact
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[70px]">
            <h1 className="font-semibold text-[36px] text-center">
              Get In Touch With Us
            </h1>
            <p className="w-[42%] mx-auto text-center text-[#9F9F9F]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="w-[100%] flex justify-evenly mt-[80px]">
            <div className="w-[20%]">
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={AddressIcon} alt="" />
                </div>
                <div>
                  <p className="font-medium text-[24px]">Address</p>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={PhoneIcon} alt="" />
                </div>
                <div>
                  <p className="font-medium text-[24px]">Phone</p>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={WorkingTimeIcon} alt="" />
                </div>
                <div>
                  <p className="font-medium text-[24px]">Working Time</p>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p> Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <form>
               <div className="flex flex-col w-[100%] ">
               <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Your Name</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="Abc"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Email address</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="Abc@def.com"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Subject</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="This is an optional"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Message</label>
                  <br />
                  <input
                    className="outline-none h-[75px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px] pt-[40px] pb-[90px]"
                    type="text"
                    placeholder="Hi! i’d like to ask about"
                  />
                </div>
               </div>
                <button className="bgCoraal text-white px-[80px] py-[15px] rounded-[5px]">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default ContactPage;
