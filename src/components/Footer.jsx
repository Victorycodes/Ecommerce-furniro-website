import React from "react";
import { useNavigate } from "react-router-dom";
import FooterLogo from "../assets/images/footerLogo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <hr />
        <div className="m-[auto] desktop:w-4/5 w-[90%]">
          <div className="grid justify-between desktop:grid-cols-4 grid-cols-2 desktop:gap-x-[0px] gap-x-[30px]  desktop:mt-[50px] mt-[20px]">
            <div>
              <img
                src={FooterLogo}
                alt=""
                className="desktop:pb-[30px] pb-[10px]"
              />
              <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                400 University Drive Suite 200 Coral <br /> Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
            <ul>
              <li className="desktop:text-[#9F9F9F] text-[#000000] font-medium desktop:text-[16px] text-[14px] desktop:font-normal desktop:pb-[30px] pb-[5px] desktop:pt-[0px] pt-[20px]">
                Links
              </li>
              <li onClick={() => navigate("/")} className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Home
              </li>
              <li onClick={() => navigate("/shop")} className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Shop
              </li>
              <li className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                About
              </li>
              <li onClick={() => navigate("/contact")} className=" desktop:pb-[30px] pb-[15px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Contact
              </li>
            </ul>
            <ul className="desktop:mt-[0px] mt-[15px]">
              <li className="desktop:text-[#9F9F9F] text-[#000000] font-medium desktop:text-[16px] text-[14px] desktop:font-normal desktop:pb-[30px] pb-[5px]">
                Help
              </li>
              <li className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Payment Options
              </li>
              <li className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Returns
              </li>
              <li className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Privacy Policies
              </li>
              <li onClick={() => navigate("/blog")} className=" desktop:pb-[30px] pb-[5px] desktop:font-medium desktop:text-[16px] text-[14px] font-normal text-[#9F9F9F] desktop:text-[#000000]">
                Blog
              </li>
            </ul>
            <form className="desktop:mb-[0px] mb-[15px]">
              <p className="desktop:text-[#9F9F9F] text-[#000000] desktop:text-[16px] text-[14px] font-medium desktop:font-normal desktop:pb-[30px] pb-[5px] desktop:pt-[0px] pt-[20px]">
                Newsletter
              </p>
              <input
                className="border-b-2 border-black desktop:text-[16px] text-[14px]"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="ml-[10px] desktop:font-medium font-normal uppercase border-b-2 border-black desktop:text-[16px] text-[12px]">
                subscribe
              </button>
            </form>
          </div>
          <hr />
          <p className="desktop:my-[20px] my-[10px] desktop:text-[16px] text-[14px]">2023 furino. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
