import React from "react";
import FooterLogo from "../assets/images/footerLogo.svg";

const Footer = () => {
  return (
    <>
      <div>
        <hr />
        <div className="m-[auto] w-4/5">
          <div className="flex justify-between mt-[50px]">
            <div>
              <img src={FooterLogo} alt="" className="pb-[30px]" />
              <p className="text-[#9F9F9F]">
                400 University Drive Suite 200 Coral <br /> Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
            <ul>
              <li className="text-[#9F9F9F] pb-[30px]">Links</li>
              <li className=" pb-[30px] font-medium">Home</li>
              <li className=" pb-[30px] font-medium">Shop</li>
              <li className=" pb-[30px] font-medium">About</li>
              <li className=" pb-[30px] font-medium">Contact</li>
            </ul>
            <ul>
              <li className="text-[#9F9F9F] pb-[30px]">Help</li>
              <li className=" pb-[30px] font-medium">Payment Options</li>
              <li className=" pb-[30px] font-medium">Returns</li>
              <li className=" pb-[30px] font-medium">Privacy Policies</li>
            </ul>
            <form>
              <p className="text-[#9F9F9F] pb-[30px]">Newsletter</p>
              <input className="border-b-2 border-black" type="email" placeholder="Enter Your Email Address" />
              <button className="ml-[10px] font-medium uppercase border-b-2 border-black">
                subscribe
              </button>
            </form>
          </div>
          <hr />
          <p className="my-[20px]">2023 furino. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
