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
import CustomerSupportIcon from "../assets/images/icons/customerSupport.svg";
import FreeShippingIcon from "../assets/images/icons/freeShipping.svg";
import WarrantyIcon from "../assets/images/icons/warranty.svg";
import QualityIcon from "../assets/images/icons/quality.svg";
import "../css/ShopPage.css";
import { products } from "../utils/products";
import { useNavigate } from "react-router-dom";

const imagesPerPage = 8;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
  const [images, setImages] = useState([])

  const totalPages = 3
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


  const getCurrentImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setImages(products)
  })

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
        <div className=" bg-[#F9F1E7]">
          <div className="flex justify-around items-center mt-[-5px] py-[20px] max-w-[1236px] mx-auto">
            <div className="flex items-center">
              <div className="flex justify-around items-center gap-[30px]">
                <div className="flex items-center gap-[15px]">
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
                <div className="mx-[30px]">
                  <img src={VerRule} alt="" />
                </div>
                <div>
                  <p>Showing 1-16 of 32 results</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-center">
              <form>
                <label className="text-[20px] mr-[20px]">Show</label>
                <input
                  className="w-[55px] h-[55px] text-center mr-[30px]"
                  type="number"
                  name=""
                  id=""
                  placeholder="16"
                />
                <label className="text-[20px] mr-[20px]">Short by</label>
                <input
                  className="w-[188px] h-[55px] text-center"
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
          <div className="shopWrapperImg grid grid-cols-4">
            {getCurrentImages().map((image, index) => (
              <div
                key={index}
                className="rangeWrapperDesc"
              >
                <div className="image-container">
                  <img src={image.src} alt={image.alt}/>
                  <div className="overlay">
                    <div>
                      <button className="add-to-cart-btn" onClick={() => navigate(`/product-details/${image.id}`)}>Add to Cart</button>
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
          <div className="flex justify-center gap-[30px]">
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
            <img src={ FreeShippingIcon} className="w-[60px] h-[56px]" alt="" />
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
      </div>
    </>
  );
};

export default ShopPage;
