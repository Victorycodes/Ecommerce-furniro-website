import React from "react";
import CustomerSupportIcon from "../assets/images/icons/customerSupport.svg";
import FreeShippingIcon from "../assets/images/icons/freeShipping.svg";
import WarrantyIcon from "../assets/images/icons/warranty.svg";
import QualityIcon from "../assets/images/icons/quality.svg";

const sub_footer = () => {
  return (
    <>
      <div className="mt-[50px] flex bg-[#F9F1E7] justify-between py-[70px] px-[25px]">
        <div className="flex gap-[7px] items-center">
          <img src={QualityIcon} className="w-[52px] h-[60px]" alt="" />
          <div>
            <p className="featureTopic">High Quality</p>
            <p className="featureDesc">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={WarrantyIcon} className="w-[60px] h-[58px]" alt="" />
          <div>
            <p className="featureTopic">Warranty Protection</p>
            <p className="featureDesc">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={FreeShippingIcon} className="w-[60px] h-[56px]" alt="" />
          <div>
            <p className="featureTopic">Free Shipping</p>
            <p className="featureDesc">Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <img src={CustomerSupportIcon} className="w-[53px] h-[60px]" alt="" />
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
