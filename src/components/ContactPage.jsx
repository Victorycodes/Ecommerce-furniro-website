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
          <div className="bgImg absolute desktop:top-[130px] top-[28px]">
            <div className="flex justify-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div className="logoIconHead">
              <h1 className="text-center desktop:text-5xl text-[24px]	font-medium desktop:mb-[8px]">
                Contact
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center desktop:mt-[0px] mt-[-8px]">
                <span className="font-medium desktop:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light desktop:text-[16px] text-[12px]">
                  Contact
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="desktop:mt-[70px] mt-[20px] desktop:ml-[0px] ml-[20px]">
            <h1 className="font-semibold desktop:text-[36px] text-[28px] desktop:text-center">
              Get In Touch With Us
            </h1>
            <p className="desktop:w-[42%] w-[90%] desktop:mx-auto desktop:text-center text-[#9F9F9F]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="w-[100%] flex desktop:gap-[0px] gap-[40px] desktop:flex-row flex-col-reverse justify-evenly desktop:mt-[80px] mt-[30px]">
            <div className="desktop:w-[20%] w-[50%] desktop:ml-[0px] ml-[20px]">
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={AddressIcon} alt="" className="desktop:w-[40px] desktop:h-[40px] w-[30px] h-[30px]" />
                </div>
                <div>
                  <p className="font-medium desktop:text-[24px] text-[20px]">Address</p>
                  <p className="desktop:text-[16px] text-[14px]">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={PhoneIcon} alt="" className="desktop:w-[30px] desktop:h-[40px] w-[20px] h-[30px]" />
                </div>
                <div>
                  <p className="font-medium desktop:text-[24px] text-[20px]">Phone</p>
                  <p className="desktop:text-[16px] text-[14px]">Mobile: +(84) 546-6789</p>
                  <p className="desktop:text-[16px] text-[14px]">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex gap-[30px] mb-[60px]">
                <div>
                  <img src={WorkingTimeIcon} alt="" className="desktop:w-[30px] desktop:h-[40px] w-[20px] h-[30px]" />
                </div>
                <div>
                  <p className="font-medium desktop:text-[24px] text-[20px]">Working Time</p>
                  <p className="desktop:text-[16px] text-[14px]">Monday-Friday: 9:00 - 22:00</p>
                  <p className="desktop:text-[16px] text-[14px]"> Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="desktop:w-[40%] w-[90%] desktop:ml-[0px] ml-[20px] ">
              <form>
               <div className="flex flex-col w-[100%] ">
               <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Your Name</label>
                  <br />
                  <input
                    className="outline-none desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="Abc"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Email address</label>
                  <br />
                  <input
                    className="outline-none desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="Abc@def.com"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Subject</label>
                  <br />
                  <input
                    className="outline-none desktop:py-[25px] py-[15px] w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px]"
                    type="text"
                    placeholder="This is an optional"
                  />
                </div>
                <div className="mb-[20px]">
                  <label className="font-medium text-[16px]">Message</label>
                  <br />
                  <input
                    className="outline-none w-full rounded-[5px] border-[1px] border-solid border-[#9F9F9F] px-[20px] desktop:pt-[40px] pt-[20px] desktop:pb-[90px] pb-[45px]"
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
