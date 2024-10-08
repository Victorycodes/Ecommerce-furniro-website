import React, { useState } from "react";
import HomeBg from "../assets/images/home-wallpaper.png";
import LivingRoom from "../assets/images/livingroom.png";
import Dining from "../assets/images/dining.png";
import Bedroom from "../assets/images/bedroom.png";
import image1 from "../assets/images/row_1/image_1.png";
import image2 from "../assets/images/row_1/image_2.png";
import image3 from "../assets/images/row_1/image_3.png";
import image4 from "../assets/images/row_1/image_4.png";
import image5 from "../assets/images/row_1/image_5.png";
import image6 from "../assets/images/row_1/image_6.png";
import image7 from "../assets/images/row_1/image_7.png";
import image8 from "../assets/images/row_1/image_8.png";
import image9 from "../assets/images/row_1/image_9.png";
import image10 from "../assets/images/row_1/image_10.png";
import image11 from "../assets/images/row_1/image_11.png";
import image12 from "../assets/images/row_1/image_12.png";
import room1 from "../assets/images/room1.png";
import room2 from "../assets/images/room2.png";
import shareIcon from "../assets/images/share.png";
import compareIcon from "../assets/images/compare.png";
import Stroke from "../assets/images/stroke.png";
import likeIcon from "../assets/images/like.png";
import rightArrow from "../assets/images/rightarrow.png";
import Furniro from "../assets/images/furniro.svg"
import "../css/HomePage.css";

const images = [
  {
    src: image1,
    alt: "Image 1",
    name: "Syltherine",
    title: "Stylish cafe chair",
    description:
      "A stylish and modern cafe chair perfect for any dining space.",
    price: 2.5,
    slashPrice: 3.5,
  },
  {
    src: image2,
    alt: "Image 2",
    name: "Leviosa",
    title: "Elegant cafe chair",
    description:
      "An elegant chair that adds a touch of sophistication to your dining area.",
    price: 2.5,
    slashPrice: "",
  },
  {
    src: image3,
    alt: "Image 3",
    name: "Lolito",
    title: "Luxury big sofa",
    description: "A luxurious and spacious sofa for maximum comfort and style.",
    price: 7.0,
    slashPrice: 14.0,
  },
  {
    src: image4,
    alt: "Image 4",
    name: "Respira",
    title: "Outdoor bar table and stool",
    description:
      "Perfect for outdoor gatherings with a modern bar table and stools.",
    price: 5.0,
    slashPrice: "",
  },
  {
    src: image5,
    alt: "Image 5",
    name: "Grifo",
    title: "Night lamp",
    description:
      "A stylish night lamp that adds warmth and coziness to your room.",
    price: 1.5,
    slashPrice: "",
  },
  {
    src: image6,
    alt: "Image 6",
    name: "Muggo",
    title: "Cafe chair",
    description: "A comfortable cafe chair suitable for any occasion.",
    price: 2.5,
    slashPrice: 150.0,
  },
  {
    src: image7,
    alt: "Image 7",
    name: "Pingky",
    title: "Cute bed set",
    description: "A cute and comfy bed set for a cozy bedroom.",
    price: 7.0,
    slashPrice: 14.0,
  },
  {
    src: image8,
    alt: "Image 8",
    name: "Pot",
    title: "Minimalist flower pot",
    description: "A minimalist flower pot that complements any interior style.",
    price: 500.0,
    slashPrice: "",
  },
  {
    src: image9,
    alt: "Image 9",
    name: "Lounge",
    title: "Complete lounge set",
    description: "A nice lounge for interior design.",
    price: 700.0,
    slashPrice: "",
  },
  {
    src: image10,
    alt: "Image 10",
    name: "Sofa",
    title: "Velvet fabric sofa",
    description: "A velvet fabric sofa with nice interior.",
    price: 500.0,
    slashPrice: "",
  },
  {
    src: image11,
    alt: "Image 11",
    name: "Settee",
    title: "Family settee size",
    description: "A family settee with standard quality.",
    price: 900.0,
    slashPrice: "",
  },
  {
    src: image12,
    alt: "Image 12",
    name: "Bedside",
    title: "Bed lamp",
    description: "A nice bed lamp.",
    price: 500.0,
    slashPrice: "",
  },
];

const HomePage = () => {
  const [visibleImages, setVisibleImages] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [popup, setPopup] = useState({
    isVisible: false,
    details: {},
    position: { top: 0, left: 0 },
  });

  const openPopup = (e, details) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopup({
      isVisible: true,
      details,
      position: {
        top: rect.top - window.scrollY - 120,
        left: rect.left + rect.width / 2 - 150,
      },
    });
  };

  const closePopup = () => {
    setPopup({
      ...popup,
      isVisible: false,
    });
  };

  const toggleImages = () => {
    if (showAll) {
      setVisibleImages(8);
    } else {
      setVisibleImages(images.length);
    }
    setShowAll(!showAll);
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
        <h1 className="text-3xl font-bold text-[#333333] subTopic mt-[40px]">Browse The Range</h1>
        <p className="subTopic colorGrey2">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <div className="rangeWrapperImgs">
          <div>
            <img src={Dining} alt="Diningroom" className="rooms" />
            <p className="rangeWrapperDesc colorGrey">Dining</p>
          </div>
          <div>
            <img src={LivingRoom} alt="Livingroom" className="rooms" />
            <p className="rangeWrapperDesc colorGrey">Living</p>
          </div>
          <div>
            <img src={Bedroom} alt="Bedroom" className="rooms" />
            <p className="rangeWrapperDesc colorGrey">Bedroom</p>
          </div>
        </div>
      </div>
      <div className="ourProductWrapper">
        <h1 className="text-3xl font-bold text-[#3A3A3A] subTopic mt-[40px] subTopic">Our Products</h1>
        <div className="rangeWrapperImg">
          {Array.from({ length: Math.ceil(visibleImages / 4) }).map(
            (_, rowIndex) => (
              <div className="rows firstRow" key={rowIndex}>
                {images
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="rangeWrapperDesc"
                      onClick={(e) => openPopup(e, image)}
                    >
                      <div className="image-container">
                        <img src={image.src} alt={image.alt} />
                        <div className="overlay">
                          <div>
                            <button className="add-to-cart-btn">
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
            )
          )}
        </div>
        <div className="ourProductBtn">
          <button className="showMoreBtn" onClick={toggleImages}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <div className="roomInspiration">
        <div className="roomInspirationWrapper">
          <div className="roomInspirationInfo">
            <h1 className="text-4xl font-bold colorGrey3 roomInspirationHead">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="colorGrey4 roomInspirationDesc">
              Our designeralready made a lot of beautiful prototype of rooms
              that inspire you
            </p>
          </div>
          <button className="exploreMoreBtn">Explore More</button>
        </div>
        <div className="roomInspirationImage">
          <div className="" style={{position: 'relative'}}>
            <img src={room1} alt="room one" />
            <div className="room1Desc"> 
              <p className="colorGrey4 flex items-center gap-2">
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
        <p className="colorGrey4 mt-[40px]">Share your setup with </p>
        <h1 className="colorGrey3 text-3xl font-bold text-[#3A3A3A]">#FuniroFurniture</h1>
        <div>
          <img src={Furniro} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
