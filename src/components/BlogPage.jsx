import React from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import LogoIcon from "../assets/images/icons/logoIcon.svg";
import AdminImg1 from "../assets/images/adminImg1.svg";
import AdminImg2 from "../assets/images/AdminImg2.svg";
import AdminImg3 from "../assets/images/AdminImg3.svg";
import AdminIcon from "../assets/images/icons/AdminIcon.svg";
import CalenderIcon from "../assets/images/icons/CalenderIcon.svg";
import TagIcon from "../assets/images/icons/TagIcon.svg";
import SideNav from "./sideNav";
import SubFooter from "./sub_footer";

const AboutPage = () => {
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
                Blog
              </h1>
            </div>
            <div>
              <p className="flex items-center justify-center desktop:mt-[0px] mt-[-8px]">
                <span className="font-medium desktop:text-[16px] text-[12px]">
                  Home
                </span>
                <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
                <span className="font-light desktop:text-[16px] text-[12px]">
                  Blog
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="desktop:mt-[70px] mt-[30px] w-[100%] flex desktop:flex-row flex-col justify-evenly items-start">
          <div className="desktop:w-[60%] w-[95%] desktop:mx-0 mx-auto desktop:mb-0 mb-[50px]">
            <div>
              <div>
                <img src={AdminImg1} alt="" />
              </div>
              <div className="flex items-center desktop:gap-[30px] gap-[20px] mt-[10px]">
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={AdminIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={CalenderIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    14 Oct 2022
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={TagIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
              </div>
              <p className="font-medium desktop:text-[30px] text-[22px] mt-[10px]">
                Going all-in with millennial design
              </p>
              <p className="text-[#9F9F9F] desktop:text-[15px] text-[12px] mb-[20px] desktop:w-[85%] w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="desktop:mb-[20px]">
                <a className="border-b-[2px] desktop:pb-[10px] pb-[5px] desktop:text-[16px] text-[14px]">
                  Read more
                </a>
              </p>
            </div>
            <div className="desktop:mt-[70px] mt-[30px]">
              <div>
                <img src={AdminImg2} alt="" />
              </div>
              <div className="flex items-center desktop:gap-[30px] gap-[20px] mt-[10px]">
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={AdminIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={CalenderIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    14 Oct 2022
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={TagIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
              </div>
              <p className="font-medium desktop:text-[30px] text-[22px] mt-[10px]">
                Exploring new ways of decorating
              </p>
              <p className="text-[#9F9F9F] desktop:text-[15px] text-[12px] mb-[20px] desktop:w-[85%] w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="desktop:mb-[20px]">
                <a className="border-b-[2px] desktop:pb-[10px] pb-[5px] desktop:text-[16px] text-[14px]">
                  Read more
                </a>
              </p>
            </div>
            <div className="desktop:mt-[70px] mt-[30px]">
              <div>
                <img src={AdminImg3} alt="" />
              </div>
              <div className="flex items-center desktop:gap-[30px] gap-[20px] mt-[10px]">
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={AdminIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={CalenderIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    14 Oct 2022
                  </p>
                </div>
                <div className="flex items-center desktop:gap-[20px] gap-[10px]">
                  <img src={TagIcon} alt="" />
                  <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
                    Admin
                  </p>
                </div>
              </div>
              <p className="font-medium desktop:text-[30px] text-[22px] mt-[10px]">
                Handmade pieces that took time to make
              </p>
              <p className="text-[#9F9F9F] desktop:text-[15px] text-[12px] mb-[20px] desktop:w-[85%] w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="desktop:mb-[20px]">
                <a className="border-b-[2px] desktop:pb-[10px] pb-[5px] desktop:text-[16px] text-[14px]">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="desktop:w-[30%] w-[95%] desktop:mx-0 mx-auto">
            <SideNav />
          </div>
        </div>
        <SubFooter />
      </div>
    </>
  );
};

export default AboutPage;
