import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import AsgaardSofa from "../assets/images/icons/sofa5.svg";
import OutdoorSofa from "../assets/images/icons/sofa6.svg";
import DownArrow from "../assets/images/icons/downVector.svg";

const ProductComparison = () => {
  return (
    <>
      <div>
        <img src={ShopBg} alt="" />
        <div className="bgImg absolute xl2:left-[35%] left-[40%] xl2:top-[130px] top-[130px]">
          <div className="flex justify-center">
            <img src={LogoIcon} alt="" />
          </div>
          <h1 className="text-center xl2:text-5xl text-[24px]	font-medium xl2:mb-[8px]">
            Product Comparison
          </h1>
          <p className="flex items-center justify-center">
            <span className="font-medium xl2:text-[16px] text-[12px]">
              Home
            </span>
            <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
            <span className="font-light xl2:text-[16px] text-[12px]">
              Comparison
            </span>
          </p>
        </div>
        <table className="mx-auto mt-6 w-[95%] table-fixed">
          <thead>
            <tr>
              <th className="text-left w-1/4">
                <div className="flex flex-col items-start">
                  <h6 className="text-[28px] font-medium">
                    Go to Product <br /> page for more <br /> Products
                  </h6>
                  <p>
                    <a
                      className="text-[#9F9F9F] border-b-2 border-[#9F9F9F]"
                      href="#"
                    >
                      View More
                    </a>
                  </p>
                </div>
              </th>
              <th className="w-1/4 text-center">
                <div>
                  <img
                    src={AsgaardSofa}
                    alt="Asgaard Sofa"
                    className="max-w-[100%]"
                  />
                </div>
              </th>
              <th className="w-1/4 text-center">
                <div className="mt-[-70px]">
                  <img
                    src={OutdoorSofa}
                    alt="Outdoor Sofa"
                    className="max-w-[100%]"
                  />
                </div>
              </th>
              <th className="text-center">
                <p className="text-[24px] font-semibold">Add A Product</p>
                <button
                  className="flex items-center rounded-[8px] text-white gap-[20px] py-[5px] px-[15px] bg-[#B88E2F] text-[14px] font-semibold"
                  type="button"
                >
                  Choose A Product <img src={DownArrow} alt="Down arrow" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="border-[1px] border-[#E8E8E8]">
            <tr>
                <td className="font-medium text-[28px]">General</td>
            </tr>
            <tr className="text-[20px]">
              <td>Sales Package</td>
              <td>1 sectional sofa</td>
              <td>1 Three Seater, 2 Single Seater</td>
            </tr>
            <tr  className="text-[20px] pl-[20px]">
              <td>Model Number</td>
              <td>TFCBLIGRBL6SRHS</td>
              <td>DTUBLIGRBL568</td>
            </tr>
            <tr  className="text-[20px] pl-[20px]">
              <td>Secondary Material</td>
              <td>Solid Wood</td>
              <td>Solid Wood</td>
            </tr>
            <tr  className="text-[20px] pl-[20px]">
              <td>Configuration</td>
              <td>L-shaped</td>
              <td>L-shaped</td>
            </tr>
            <tr  className="text-[20px] pl-[20px]">
              <td>Upholstery Material</td>
              <td>Fabric + Cotton</td>
              <td>Fabric + Cotton</td>
            </tr>
            <tr  className="text-[20px] pl-[20px]">
              <td>Upholstery Color</td>
              <td>Bright Grey & Lion</td>
              <td>Bright Grey & Lion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductComparison;
