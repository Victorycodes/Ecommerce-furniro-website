import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import AsgaardSofa from "../assets/images/icons/sofa5.svg";
import OutdoorSofa from "../assets/images/icons/sofa6.svg";
import DownArrow from "../assets/images/icons/downVector.svg";
import StarRating from "../assets/images/4_half_rating.png";
import VerRule from "../assets/images/icons/verRule.svg";
import SubFooter from "./sub_footer";

const ProductComparison = () => {
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
                Product Comparison
              </h1>
            </div>
            <p className="flex items-center justify-center desktop:mt-[0px] mt-[-8px]">
              <span className="font-medium desktop:text-[16px] text-[12px]">
                Home
              </span>
              <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
              <span className="font-light desktop:text-[16px] text-[12px]">
                Comparison
              </span>
            </p>
          </div>
        </div>
        <table className="mx-auto mt-[30px] w-[95%] table-fixed border-collapse">
          <thead>
            <tr>
              <th className="text-left w-1/4">
                <div className="flex flex-col items-start">
                  <h6 className="desktop:text-[28px] text-[18px] font-medium mb-[20px] desktop:w-[60%]">
                    Go to Product page for more Products
                  </h6>
                  <p>
                    <a
                      className="text-[#9F9F9F] border-b-[1px] border-[#9F9F9F]"
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
                <div>
                  <p className="text-left font-medium desktop:text-[24px] text-[18px]">
                    Asgaard Sofa
                  </p>
                  <p className="text-left font-medium desktop:text-[18px] text-[14px]">
                    Rs. 250,000.00
                  </p>
                  <p className="flex items-center gap-[8px] desktop:flex-row flex-col">
                    <div className="flex items-center flex-row">
                      <span className="font-medium desktop:text-[18px] text-[14px]">
                        4.7
                      </span>

                      <img
                        src={StarRating}
                        alt=""
                        className="desktop:w-[96px] desktop:h-[15.5px] w-[50px] h-[14px]"
                      />
                      <img
                        src={VerRule}
                        alt=""
                        className="desktop:flex hidden"
                      />
                    </div>
                    <span className="text-[13px] text-[#9F9F9F]">
                      204 Reviews
                    </span>
                  </p>
                </div>
              </th>
              <th className="w-1/4 text-center">
                <div className="desktop:mt-[-70px] mt-[-15px]">
                  <img
                    src={OutdoorSofa}
                    alt="Outdoor Sofa"
                    className="max-w-[100%]"
                  />
                  <div>
                    <p className="text-left font-medium desktop:text-[24px] text-[18px]">
                      Outdoor Sofa Set
                    </p>
                    <p className="text-left font-medium desktop:text-[18px] text-[14px]">
                      Rs. 224,000.00
                    </p>
                    <p className="flex items-center gap-[8px] desktop:flex-row flex-col">
                    <div className="flex items-center flex-row">
                        <span className="font-medium desktop:text-[18px] text-[14px]">
                          4.2
                        </span>

                        <img
                          src={StarRating}
                          alt=""
                          className="desktop:w-[96px] desktop:h-[15.5px] w-[50px] h-[14px]"
                        />
                        <img
                          src={VerRule}
                          alt=""
                          className="desktop:flex hidden"
                        />
                      </div>
                      <span className="text-[13px] text-[#9F9F9F]">
                        145 Reviews
                      </span>
                    </p>
                  </div>
                </div>
              </th>
              <th className="text-center">
                <p className="desktop:text-[24px] text-[13px] text-left font-semibold">
                  Add A Product
                </p>
                <button
                  className="flex items-center rounded-[8px] text-white desktop:gap-[20px] gap-[10px] py-[5px] desktop:px-[15px] px-[10px] bg-[#B88E2F] desktop:text-[14px] text-[12px] desktop:font-semibold font-[400]"
                  type="button"
                >
                  Choose A Product <img src={DownArrow} alt="Down arrow" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="mt-[30px]">
            <tr>
              <td className="border-r-[1px] font-medium desktop:text-[28px] text-[22px] border-t-[1px]">
                General
              </td>
              <td className="border-r-[1px] border-t-[1px]"></td>
              <td className="border-r-[1px] border-t-[1px]"></td>
              <td className=" border-t-[1px] desktop:flex hidden"></td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Sales Package</td>
              <td className="border-r-[1px]">1 sectional sofa</td>
              <td className="border-r-[1px]">
                1 Three Seater, 2 Single Seater
              </td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Model Number</td>
              <td className="border-r-[1px]">TFCBLIGRBL6SRHS</td>
              <td className="border-r-[1px]">DTUBLIGRBL568</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Secondary Material</td>
              <td className="border-r-[1px]">Solid Wood</td>
              <td className="border-r-[1px]">Solid Wood</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Configuration</td>
              <td className="border-r-[1px]">L-shaped</td>
              <td className="border-r-[1px]">L-shaped</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Upholstery Material</td>
              <td className="border-r-[1px]">Fabric + Cotton</td>
              <td className="border-r-[1px]">Fabric + Cotton</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Upholstery Color</td>
              <td className="border-r-[1px]">Bright Grey & Lion</td>
              <td className="border-r-[1px]">Bright Grey & Lion</td>
            </tr>

            <tr>
              <td className="border-r-[1px] font-medium desktop:text-[28px] text-[22px]">
                Product
              </td>
              <td className="border-r-[1px] "></td>
              <td className="border-r-[1px] "></td>
              <td className=" border-r-[1px]  desktop:flex hidden"></td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Filling Material</td>
              <td className="border-r-[1px]">Foam</td>
              <td className="border-r-[1px]">Matte</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Finish Type</td>
              <td className="border-r-[1px]">Bright Grey & Lion</td>
              <td className="border-r-[1px]">Bright Grey & Lion</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Adjustable Headrest</td>
              <td className="border-r-[1px]">No</td>
              <td className="border-r-[1px]">Yes</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Maximum Load Capacity</td>
              <td className="border-r-[1px]">280 KG</td>
              <td className="border-r-[1px]">300 KG</td>
            </tr>
            <tr className="desktop:text-[20px] text-[16px]">
              <td className="border-r-[1px]">Origin of Manufacture</td>
              <td className="border-r-[1px]">India</td>
              <td className="border-r-[1px]">India</td>
            </tr>
            <tr>
              <td className="border-r-[1px] font-medium desktop:text-[28px] text-[22px]">
                Dimensions
              </td>
              <td className="border-r-[1px] "></td>
              <td className="border-r-[1px] "></td>
              <td className=" border-r-[1px] desktop:flex hidden"></td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Width</td>
              <td className="border-r-[1px]">265.32 cm</td>
              <td className="border-r-[1px]">265.32 cm</td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Height</td>
              <td className="border-r-[1px]">76 cm</td>
              <td className="border-r-[1px]">76 cm</td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Depth</td>
              <td className="border-r-[1px]">167.76 cm</td>
              <td className="border-r-[1px]">167.76 cm</td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Weight</td>
              <td className="border-r-[1px]">45 KG</td>
              <td className="border-r-[1px]">65 KG</td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Seat Height</td>
              <td className="border-r-[1px]">41.52 cm</td>
              <td className="border-r-[1px]">41.52 cm</td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Leg Height</td>
              <td className="border-r-[1px]">5.46 cm</td>
              <td className="border-r-[1px]">5.46 cm</td>
            </tr>

            <tr>
              <td className="border-r-[1px] font-medium desktop:text-[28px] text-[22px]">
                Warranty
              </td>
              <td className="border-r-[1px] "></td>
              <td className="border-r-[1px] "></td>
              <td className=" border-r-[1px] desktop:flex hidden"></td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Warranty Summary</td>
              <td className="border-r-[1px]">1 Year Manufacturing Warranty</td>
              <td className="border-r-[1px]">
                1.2 Year Manufacturing Warranty
              </td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Warranty Service Type</td>
              <td className="border-r-[1px]">
                For Warranty Claims or Any Product Related Issues Please Email
                at operations@trevifurniture.com
              </td>
              <td className="border-r-[1px]">
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Covered in Warranty</td>
              <td className="border-r-[1px]">
                Warranty Against Manufacturing Defect
              </td>
              <td className="border-r-[1px]">
                Warranty of the product is limited to manufacturing defects
                only.
              </td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Not Covered in Warranty</td>
              <td className="border-r-[1px]">
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </td>
              <td className="border-r-[1px]">
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </td>
            </tr>
            <tr className="text-[20px]">
              <td className="border-r-[1px]">Domestic Warranty</td>
              <td className="border-r-[1px]">1 Year</td>
              <td className="border-r-[1px]">3 Months</td>
            </tr>
            <tr className="text-[20px] text-white">
              <td></td>
              <td className="border-r-[1px]">
                <button className="bg-[#B88E2F] py-[15px] px-[30px]">
                  Add To Cart
                </button>
              </td>
              <td className="border-r-[1px]">
                <button className="bg-[#B88E2F] py-[15px] px-[30px]">
                  Add To Cart
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <SubFooter />
      </div>
    </>
  );
};

export default ProductComparison;
