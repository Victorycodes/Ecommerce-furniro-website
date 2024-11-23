import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";

const AboutPage = () => {
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
                Blog
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center">
                <span className="font-medium xl2:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light xl2:text-[16px] text-[12px]">
                  Blog
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
