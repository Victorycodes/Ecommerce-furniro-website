import React from "react";
import { useNavigate } from "react-router-dom";
import FooterLogo from "../assets/images/footerLogo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <hr />
        <div className="m-[auto] xl2:w-4/5 w-[90%]">
          <div className="flex justify-between xl2:flex-row flex-col xl2:mt-[50px] mt-[20px]">
            <div>
              <img
                src={FooterLogo}
                alt=""
                className="xl2:pb-[30px] pb-[10px]"
              />
              <p className="text-[#9F9F9F] xl2:text-[16px] text-[14px]">
                400 University Drive Suite 200 Coral <br /> Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
            <ul>
              <li className="xl2:text-[#9F9F9F] text-[#000000] font-medium xl2:text-[16px] text-[14px] xl2:font-normal xl2:pb-[30px] pb-[5px] xl2:pt-[0px] pt-[20px]">
                Links
              </li>
              <li onClick={() => navigate("/")} className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Home
              </li>
              <li onClick={() => navigate("/shop")} className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Shop
              </li>
              <li className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                About
              </li>
              <li onClick={() => navigate("/contact")} className=" xl2:pb-[30px] pb-[15px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Contact
              </li>
            </ul>
            <ul>
              <li className="xl2:text-[#9F9F9F] text-[#000000] font-medium xl2:text-[16px] text-[14px] xl2:font-normal xl2:pb-[30px] pb-[5px]">
                Help
              </li>
              <li className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Payment Options
              </li>
              <li className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Returns
              </li>
              <li className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Privacy Policies
              </li>
              <li onClick={() => navigate("/blog")} className=" xl2:pb-[30px] pb-[5px] xl2:font-medium xl2:text-[16px] text-[14px] font-normal text-[#9F9F9F] xl2:text-[#000000]">
                Blog
              </li>
            </ul>
            <form className="xl2:mb-[0px] mb-[15px]">
              <p className="xl2:text-[#9F9F9F] text-[#000000] xl2:text-[16px] text-[14px] font-medium xl2:font-normal xl2:pb-[30px] pb-[5px] xl2:pt-[0px] pt-[20px]">
                Newsletter
              </p>
              <input
                className="border-b-2 border-black xl2:text-[16px] text-[14px]"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="ml-[10px] xl2:font-medium font-normal uppercase border-b-2 border-black xl2:text-[16px] text-[12px]">
                subscribe
              </button>
            </form>
          </div>
          <hr />
          <p className="xl2:my-[20px] my-[10px] xl2:text-[16px] text-[14px]">2023 furino. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
