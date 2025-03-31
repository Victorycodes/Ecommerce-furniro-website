import React from "react";
import CustomerSupportIcon from "../assets/images/icons/customerSupport.svg";
import FreeShippingIcon from "../assets/images/icons/freeShipping.svg";
import WarrantyIcon from "../assets/images/icons/warranty.svg";
import QualityIcon from "../assets/images/icons/quality.svg";

const sub_footer = () => {
  return (
    <>
      <div className="desktop:mt-[50px] mt-[20px] flex desktop:flex-row flex-col bg-[#F9F1E7] justify-between desktop:py-[70px] py-[30px] desktop:px-[25px] px-[15px] desktop:gap-[0] gap-[20px]">
        <div className="flex gap-[7px] items-center">
          <img src={QualityIcon} className="desktop:w-[52px] tablet:w-[52px] w-[40px] desktop:h-[60px] tablet:h-[60px] h-[50px]" alt="" />
          <div>
            <p className="featureTopic">High Quality</p>
            <p className="featureDesc">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={WarrantyIcon} className="desktop:w-[60px] tablet:w-[60px] w-[40px] desktop:h-[58px] tablet:h-[58px] h-[50px]" alt="" />
          <div>
            <p className="featureTopic">Warranty Protection</p>
            <p className="featureDesc">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={FreeShippingIcon} className="desktop:w-[60px] tablet:w-[60px] w-[40px] desktop:h-[56px] tablet:h-[56px] h-[50px]" alt="" />
          <div>
            <p className="featureTopic">Free Shipping</p>
            <p className="featureDesc">Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={CustomerSupportIcon} className="desktop:w-[53px] tablet:w-[53px] w-[40px] desktop:h-[60px] tablet:h-[60px] h-[50px]" alt="" />
          <div>
            <p className="featureTopic">24 / 7 Support</p>
            <p className="featureDesc">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default sub_footer;
