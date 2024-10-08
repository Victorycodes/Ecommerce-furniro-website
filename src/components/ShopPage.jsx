import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import FilterIcon from "../assets/images/icons/filterIcon.svg";
import BigRound from "../assets/images/icons/bigRound.svg";
import ViewList from "../assets/images/icons/viewList.svg";

const ShopPage = () => {
  return (
    <>
      <div>
        <img src={ShopBg} alt="" />
        <div className="absolute left-[50%] top-[185px]">
          <h1 className="text-center text-5xl	font-medium mb-[8px]">Shop</h1>
          <p className="flex items-center justify-center">
            <span className="font-medium">Home</span>
            <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
            <span className="font-light">Shop</span>
          </p>
        </div>
        <div>
          <div className="flex justify-around items-center mt-[-5px] bg-[#F9F1E7] py-[20px]">
            <div className="flex items-center">
              <img src={FilterIcon} alt="" />
              <p>Filter</p>
            </div>
            <div>
              <img src={BigRound} alt="" />
            </div>
            <div>
              <img src={ViewList} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
