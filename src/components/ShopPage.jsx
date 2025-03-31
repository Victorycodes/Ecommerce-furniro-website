import React, { useEffect, useState } from "react";
import ShopBg from "../assets/images/shopBg.png";
import RightPointer from "../assets/images/rightVector.svg";
import FilterIcon from "../assets/images/icons/filterIcon.svg";
import BigRound from "../assets/images/icons/bigRound.svg";
import ViewList from "../assets/images/icons/viewList.svg";
import VerRule from "../assets/images/icons/verRule.svg";
import shareIcon from "../assets/images/share.png";
import compareIcon from "../assets/images/compare.png";
import likeIcon from "../assets/images/like.png";
import "../css/ShopPage.css";
import { products } from "../utils/products";
import { useNavigate } from "react-router-dom";
import SubFooter from "./sub_footer";

const imagesPerPage = 8;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const totalPages = 3;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const getCurrentImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setImages(products);
  });

  return (
    <>
      <div>
        <img src={ShopBg} alt="" />
        <div className="flex justify-center">
          <div className="absolute desktop:top-[185px] tablet:top-[80px] top-[55px]">
            <h1 className="text-center desktop:text-5xl text-[24px]	font-medium desktop:mb-[8px]">
              Shop
            </h1>
            <p className="flex items-center justify-center">
              <span className="font-medium desktop:text-[16px] text-[12px]">
                Home
              </span>
              <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
              <span className="font-light desktop:text-[16px] text-[12px]">
                Shop
              </span>
            </p>
          </div>
        </div>
        <div className=" bg-[#F9F1E7]">
          <div className="flex desktop:flex-row flex-col justify-around items-center desktop:mt-[-5px] desktop:py-[20px] pb-[20px] max-w-[1236px] mx-auto">
            <div className="flex items-center desktop:mt-[initial] mt-[25px]">
              <div className="flex justify-around items-center desktop:gap-[30px] gap-[5px]">
                <div className="flex items-center desktop:gap-[15px] gap-[5px]">
                  <img src={FilterIcon} alt="" />
                  <p className="text-[20px]">Filter</p>
                </div>
                <div>
                  <img src={BigRound} alt="" />
                </div>
                <div>
                  <img src={ViewList} alt="" />
                </div>
              </div>
              <div className="flex justify-around items-center">
                <div className="desktop:mx-[30px] mx-[10px]">
                  <img src={VerRule} alt="" />
                </div>
                <div>
                  <p className="desktop:text-[16px] text-[14px]">
                    Showing 1-16 of 32 results
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-center">
              <form>
                <label className="desktop:text-[20px] text-[14px] desktop:mr-[20px] mr-[5px]">
                  Show
                </label>
                <input
                  className="desktop:w-[55px] w-[20px] desktop:h-[55px] h-[20px] text-center desktop:mr-[30px] mr-[8px] desktop:text-[16px] text-[12px]"
                  type="number"
                  name=""
                  id=""
                  placeholder="16"
                />
                <label className="desktop:text-[20px] text-[14px] desktop:mr-[20px] mr-[5px]">
                  Short by
                </label>
                <input
                  className="desktop:w-[188px] w-[100px] desktop:h-[55px] h-[30px] text-center desktop:text-[16px] text-[12px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Default"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-[1236px] mx-auto">
          <div className="shopWrapperImg shopRows shopFirstRow grid desktop:grid-cols-4 grid-cols-2 desktop:mt-[30px] mt-[10px]">
            {getCurrentImages().map((image, index) => (
              <div key={index} className="rangeWrapperDesc">
                <div className="image-container">
                  <img src={image.src} alt={image.alt} />
                  <div className="overlay">
                    <div>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => navigate(`/product-details/${image.id}`)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="interactIcon">
                      <div className="interactIconList">
                        <img
                          src={shareIcon}
                          className="socialIcon"
                          alt="share icon"
                        />
                        <p className="interactionIconDesc">Share</p>
                      </div>
                      <div className="interactIconList">
                        <img
                          src={compareIcon}
                          className="socialIcon"
                          alt="compare icon"
                        />
                        <p className="interactionIconDesc">Compare</p>
                      </div>
                      <div className="loveIcon">
                        <img src={likeIcon} alt="like icon" />
                      </div>
                    </div>
                  </div>
                  <div className="imageDetails text-left">
                    <p className="name">{image.name}</p>
                    <p className="nameDesc">{image.title}</p>
                    <p className="mainPrice">
                      Rp {image.price * 1000}.00{" "}
                      {image.slashPrice && (
                        <span className="slashPrice">
                          Rp {image.slashPrice * 1000}.00
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center desktop:gap-[30px] tablet:gap-[30px] gap-[20px] desktop:mt-[50px] mt-[20px]">
            {pageNumbers.map((page, index) => (
              <button
                key={index}
                className="nextImg"
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="nextImg"
              onClick={() =>
                handlePageClick(
                  currentPage + 1 > totalPages ? totalPages : currentPage + 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>
        <SubFooter />
      </div>
    </>
  );
};

export default ShopPage;
