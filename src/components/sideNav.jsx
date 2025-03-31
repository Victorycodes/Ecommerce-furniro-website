import React from "react";
import "../css/sideNav.css";
import PostOne from "../assets/images/recentPostImg1.svg";
import PostTwo from "../assets/images/recentPostImg2.svg";
import PostThree from "../assets/images/recentPostImg3.svg";
import PostFour from "../assets/images/recentPostImg4.svg";
import PostFive from "../assets/images/recentPostImg5.svg";
import SearchIcon from "../assets/images/icons/searchIcon.svg";

const sideNav = () => {
  return (
    <>
      <div>
        <div className="flex desktop:gap-[20px] gap-[10px] flex-col justify-between">
          <input
            className="icon border-[2px] border-[#9F9F9F] desktop:py-[20px] py-[15px]"
            type="text"
          />
          <p className="ml-[30px] font-medium desktop:text-[24px] text-[22px] desktop:mt-[10px]">
            Categories
          </p>
          <div className="mx-[30px] flex gap-[20px] flex-col items-stretch justify-between">
            <div className="text-[#9F9F9F] gap-[100px] justify-between flex">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="text-[#9F9F9F] gap-[100px] justify-between flex">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="text-[#9F9F9F] gap-[100px] justify-between flex">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="text-[#9F9F9F] gap-[100px] justify-between flex">
              <p>Interior</p>
              <p>1</p>
            </div>
            <div className="text-[#9F9F9F] gap-[100px] justify-between flex">
              <p>Wood</p>
              <p>6</p>
            </div>
            <div>
              <p className="font-medium text-[24px] desktop:mt-[60px] mt-[30px]">Recent Posts</p>
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <img src={PostOne} alt="" />
                </div>
                <div>
                  <p className="text-[14px] w-[65%]">
                    Going all-in with millennial design
                  </p>
                  <span className="text-[12px] text-[#9F9F9F]">
                    03 Aug 2022
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <img src={PostTwo} alt="" />
                </div>
                <div>
                  <p className="text-[14px] w-[65%]">
                    Exploring new ways of decorating
                  </p>
                  <span className="text-[12px] text-[#9F9F9F]">
                    03 Aug 2022
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <img src={PostThree} alt="" />
                </div>
                <div>
                  <p className="text-[14px] w-[65%]">
                    Handmade pieces that took time to make
                  </p>
                  <span className="text-[12px] text-[#9F9F9F]">
                    03 Aug 2022
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <img src={PostFour} alt="" />
                </div>
                <div>
                  <p className="text-[14px] w-[65%]">Modern home in Milan</p>
                  <span className="text-[12px] text-[#9F9F9F]">
                    03 Aug 2022
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <img src={PostFive} alt="" />
                </div>
                <div>
                  <p className="text-[14px] w-[65%]">
                    Colorful office redesign
                  </p>
                  <span className="text-[12px] text-[#9F9F9F]">
                    03 Aug 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sideNav;
