import React, { useEffect, useState } from "react";
import HomeBg from "../assets/images/home-wallpaper.png";
import LivingRoom from "../assets/images/livingroom.png";
import Dining from "../assets/images/dining.png";
import Bedroom from "../assets/images/bedroom.png";
import room1 from "../assets/images/room1.png";
import room2 from "../assets/images/room2.png";
import shareIcon from "../assets/images/share.png";
import compareIcon from "../assets/images/compare.png";
import Stroke from "../assets/images/stroke.png";
import likeIcon from "../assets/images/like.png";
import rightArrow from "../assets/images/rightarrow.png";
import Furniro from "../assets/images/furniro.svg";
import "../css/HomePage.css";
import { seeMore } from "../utils/seeMore";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setImages(seeMore);
  }, []);

  const goToComparePage = () => {
    navigate("/product-comparison");
  };

  const toggleImages = () => {
    setVisibleImages(showAll ? 8 : images.length);
    setShowAll(!showAll);
  };

  const getCurrentImages = (rowIndex) => {
    const startIndex = rowIndex * 4;
    return images
      .slice(startIndex, startIndex + 4)
      .filter((_, index) => index < visibleImages);
  };

  return (
    <>
      <div>
        <img src={HomeBg} alt="Home Background" className="homeBackground" />
        <div className="newArrival">
          <p className="newArrivalTheme">New Arrival</p>
          <h1 className="colorCoraal newArrivalDesc">
            Discover Our New Collection
          </h1>
          <p className="newArrivalPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="bgCoraal homeBtn">BUY NOW</button>
        </div>
      </div>
      <div className="rangeWrapper">
        <h1 className="desktop:text-3xl text-[20px] font-bold text-[#333333] subTopic desktop:mt-[40px] mt-[10px]">
          Browse The Range
        </h1>
        <p className="subTopic colorGrey2 desktop:w-[100%] w-[75%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <div className="rangeWrapperImgs">
          <div>
            <img src={Dining} alt="Diningroom" />
            <p className="rangeWrapperDesc colorGrey">Dining</p>
          </div>
          <div>
            <img src={LivingRoom} alt="Livingroom" />
            <p className="rangeWrapperDesc colorGrey">Living</p>
          </div>
          <div>
            <img src={Bedroom} alt="Bedroom" />
            <p className="rangeWrapperDesc colorGrey">Bedroom</p>
          </div>
        </div>
      </div>
      <div className="ourProductWrapper">
        <h1 className="desktop:text-3xl text-[20px] font-bold text-[#3A3A3A] subTopic desktop:mt-[40px] mt-[10px] subTopic">
          Our Products
        </h1>
        <div className="rangeWrapperImg">
          {Array.from({ length: Math.ceil(visibleImages / 4) }).map(
            (_, rowIndex) => (
              <div className="rows firstRow" key={rowIndex}>
                {getCurrentImages(rowIndex).map((image, index) => (
                  <div key={index} className="rangeWrapperDesc">
                    <div className="image-container">
                      <img src={image.src} alt={image.alt} />
                      <div className="overlay">
                        <div>
                          <button
                            className="add-to-cart-btn"
                            onClick={() =>
                              navigate(`/product-details/${image.id}`)
                            }
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
                          <div
                            onClick={goToComparePage}
                            className="interactIconList"
                          >
                            <img
                              src={compareIcon}
                              className="socialIcon"
                              alt="compare icon"
                            />
                            <p className="interactionIconDesc">Compare</p>
                          </div>
                          <div className="loveIcon">
                            <img
                              src={likeIcon}
                              className="loveIconImg"
                              alt="like icon"
                            />
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
            )
          )}
        </div>
        <div className="ourProductBtn">
          <button className="showMoreBtn" onClick={toggleImages}>
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
      <div className="roomInspiration">
        <div className="roomInspirationWrapper">
          <div className="roomInspirationInfo">
            <h1 className="desktop:text-4xl tablet:text-[24px] text-[12px] desktop:font-bold font-semibold colorGrey3 roomInspirationHead desktop:mb-0 tablet:mb-0 mb-[5px]">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="colorGrey4 roomInspirationDesc">
              Our designer has already made a lot of beautiful prototypes of
              rooms that inspire you
            </p>
          </div>
          <button className="exploreMoreBtn">Explore More</button>
        </div>
        <div className="roomInspirationImage">
          <div className="relative">
            <img src={room1} alt="room one" />
            <div className="room1Desc">
              <p className="colorGrey4 flex items-center desktop:gap-2 gap-1 desktop:text-[16px] text-[12px]">
                01 <img src={Stroke} alt="" /> Bed Room
              </p>
              <p className="room1Info">Inner peace</p>
            </div>
            <div className="roomArrowIcon cursor-pointer">
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div>
            <img src={room2} alt="room two" />
          </div>
        </div>
      </div>
      <div className="textCenter">
        <p className="colorGrey4 desktop:mt-[40px] mt-[20px] desktop:text-[16px] text-[14px]">
          Share your setup with{" "}
        </p>
        <h1 className="colorGrey3 desktop:text-3xl text-[20px] desktop:font-bold font-semibold text-[#3A3A3A]">
          #FuniroFurniture
        </h1>
        <div className="mb-[50px]">
          <img src={Furniro} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
