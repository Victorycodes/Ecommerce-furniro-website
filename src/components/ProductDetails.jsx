import React, {useState } from "react";
import RightPointer from "../assets/images/rightVector.svg";
import WhiteSofa1 from "../assets/images/cloudSofa1.svg";
import WhiteSofa2 from "../assets/images/cloudSofa2.svg";
import VerRule from "../assets/images/icons/verRule.svg";
import sofa2 from "../assets/images/Maya-sofa-three-seater-1.png";
import sofa3 from "../assets/images/Outdoor-sofa-set-1.png";
import sofa4 from "../assets/images/Outdoor-sofa-set-2.png";
import sofa5 from "../assets/images/Stuart-sofa-1.png";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import { seeMore } from "../utils/seeMore";
import FacbookIcon from "../assets/images/icons/facebook.svg";
import LinkedinIcon from "../assets/images/icons/linkedin.svg";
import TwwitterIcon from "../assets/images/icons/twitter.svg";

const ProductDetails = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const productsPerRow = 4;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const { id } = useParams();
  const [cart, setCart] = useState(Array.isArray(savedCart) ? savedCart : []);

  const product = products?.find((item) => item.id.toString() === id);
  const itemInCart = cart.find((item) => item.id === product?.id);

  const addToCart = (product) => {
  const updatedCart = [...cart];
  const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

  if (itemIndex !== -1) {
    updatedCart[itemIndex].quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
  
  const [selectedImage, setSelectedImage] = useState(product?.src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const increment = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrement = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id 
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } 
        : item
    ).filter(item => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const limitedProducts = products.slice(0, 4);

  return (
    <>
      <div className=" bg-[#F9F1E7] desktop:p-[20px] p-[10px] desktop:mb-[40px] mb-[20px]">
        <div className="flex items-center pl-[110px] gap-[16px]">
          <span className=" text-[#9F9F9F] desktop:text-[16px] text-[14px]">Home</span>
          <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
          <span className=" text-[#9F9F9F] desktop:text-[16px] text-[14px]">Shop</span>
          <img className="h-[8px] w-[14px]" src={RightPointer} alt="" />
          <img src={VerRule} alt="" />
          <span className=" desktop:text-[16px] text-[14px]">{product.name}</span>
        </div>
      </div>
      <div className="flex w-full desktop:flex-row flex-col items-start desktop:gap-[100px] gap-[30px] mb-[60px]">
        <div className="flex desktop:w-[50%] desktop:flex-row flex-col-reverse desktop:justify-end justify-center desktop:mx-[0px] mx-[auto] gap-[50px] items-start">
          <div className="flex desktop:flex-col flex-row desktop:mx-[0px] mx-[auto] gap-[10px]">
            <img
              className="py-[5px] rounded-[7px] bg-[#f9f1e7] w-[76px] h-[80px]"
              src={sofa2}
              alt=""
              onClick={() => handleImageClick(sofa2)}
            />
            <img
              className="py-[5px] rounded-[7px] bg-[#f9f1e7] w-[76px] h-[80px]"
              src={sofa3}
              alt=""
              onClick={() => handleImageClick(sofa3)}
            />
            <img
              className="py-[5px] rounded-[7px] bg-[#f9f1e7] w-[76px] h-[80px]"
              src={sofa4}
              alt=""
              onClick={() => handleImageClick(sofa4)}
            />
            <img
              className="py-[5px] rounded-[7px] bg-[#f9f1e7] w-[76px] h-[80px]"
              src={sofa5}
              alt=""
              onClick={() => handleImageClick(sofa5)}
            />
          </div>
          <div>
            <img
              className="w-[423px] h-[500px]  bg-[#f9f1e7] "
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
        <div className="desktop:w-[50%] flex flex-col desktop:items-start desktop:mx-[0px] mx-[30px] gap-[5px]">
          <h1 className="desktop:text-[42px] text-[36px]">{product.name}</h1>
          <p className="desktop:text-[24px] text-[18px] font-[500] text-[#9F9F9F]">
            Rp{product.price * 1000}.00{" "}
          </p>
          <div className="flex desktop:gap-[16px] gap-[5px] items-center">
            <img src={product.ratingSrc} alt="" />
            <img src={VerRule} alt="" />
            <p className="text-[#9F9F9F] text-[13px]">
              {product.peopleRating} Customer Review
            </p>
          </div>
          <p className="text-[13px] desktop:w-[55%] mt-[10px]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="desktop:mt-[15px] mt-[6px]">
            <h6 className="text-[#9F9F9F] text-[14px]">Size</h6>
            <div className="flex gap-[10px] desktop:mt-[8px] mt-[4px] desktop:mb-[15px] mb-[10px]">
              <div className="text-center pt-[4px] cursor-pointer rounded-[5px] bg-[#B88E2F] text-[13px] w-[30px] h-[30px] text-[white]">
                L
              </div>
              <div className="text-center pt-[4px] cursor-pointer rounded-[5px] bg-[#f9f1e7] text-[13px] w-[30px] h-[30px]">
                XL
              </div>
              <div className="text-center pt-[4px] cursor-pointer rounded-[5px] bg-[#f9f1e7] text-[13px] w-[30px] h-[30px]">
                XS
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-[#9F9F9F] text-[14px]">Color</h6>
            <div className="flex gap-[10px] desktop:mt-[8px] mt-[5px]">
              {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                <div
                  key={color}
                  className="rounded-[16px] w-[30px] h-[30px]"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="desktop:mt-[30px] mt-[15px] flex gap-[20px] desktop:mb-[30px] mb-[15px]">
            <div className="flex items-center gap-[30px] desktop:py-[18px] py-[15px] desktop:px-[15px] px-[7px] rounded-[8px] border-[#9F9F9F] border-[1px]">
              <MinusIcon
                className="w-[16px] h-[16px] cursor-pointer"
                onClick={() => decrement(product.alt)}
              />
              <span className="quantity desktop:text-[16px] text-[14px] font-[500]">
                {itemInCart?.quantity || 0}
              </span>
              <PlusIcon
                className="w-[16px] h-[16px] cursor-pointer"
                onClick={() => increment(product.alt)}
              />
            </div>
            <button
              className="desktop:py-[18px] py-[15px] desktop:px-[35px] px-[25px] rounded-[8px] border-[#000000] border-[1px] cursor-pointer"
              onClick={() => addToCart(product)}
            >
              <p className="desktop:text-[20px] text-[16px]">Add To Cart</p>
            </button>
            <div className="desktop:py-[18px] py-[15px] desktop:px-[35px] px-[25px] rounded-[8px] border-[#000000] border-[1px] cursor-pointer">
              <p className="desktop:text-[20px] text-[16px] flex items-center gap-[20px]">
                <PlusIcon className="w-[16px] h-[16px] cursor-pointer" />
                Compare
              </p>
            </div>
          </div>
          <pre>
            <hr />
            <p className="uppercase text-[#9F9F9F] desktop:mt-[30px] mt-[15px]">sku : SS001</p>
            <p className="text-[#9F9F9F]">Category : {product.category}</p>
            <p className="text-[#9F9F9F]">Tags :</p>
            <div className="flex">
              <p className="text-[#9F9F9F]">Share : </p>
              <div className="flex gap-[20px]">
                <img src={FacbookIcon} alt="" />
                <img src={LinkedinIcon} alt="" />
                <img src={TwwitterIcon} alt="" />
              </div>
            </div>
          </pre>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex my-[30px] items-center justify-evenly gap-[50px]">
          <h1 className="desktop:text-[24px] text-[20px] font-[500] ">Description</h1>
          <h1 className="desktop:text-[24px] text-[20px] text-[#9F9F9F]">Additional Information</h1>
          <h1 className="desktop:text-[24px] text-[20px] text-[#9F9F9F]">Reviews(5)</h1>
        </div>
        <div className="desktop:w-[67%] w-[82%] m-[auto]">
          <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px] desktop:mb-[20px] mb-[10px]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] desktop:text-[16px] text-[14px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex w-full items-center gap-[30px] mt-[40px] mb-[60px]">
          <div className="w-[50%] px-[5px] bg-[#f9f1e7] rounded-[15px] ml-[75px]">
            <img className="w-[657px] desktop:h-[436px] h-[250px]" src={WhiteSofa1} alt="" />
          </div>
          <div className="w-[50%] px-[5px] bg-[#f9f1e7] rounded-[15px] mr-[75px]">
            <img className="w-[657px] desktop:h-[436px] h-[250px]" src={WhiteSofa2} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h1 className="text-3xl font-bold text-[#3A3A3A] subTopic mt-[40px] mb-[50px]">
            Related Products
          </h1>
          <div className="flex gap-[20px] flex-wrap">
            {Array.from({
              length: Math.ceil(visibleCount / productsPerRow),
            }).map((_, rowIndex) => (
              <div
                className="rows gap-[20px] w-[100%] justify-center"
                key={rowIndex}
              >
                {seeMore
                  .slice(
                    rowIndex * productsPerRow,
                    rowIndex * productsPerRow + productsPerRow
                  )
                  .slice(0, visibleCount)
                  .map((product, index) => (
                    <div key={product.alt}>
                      <img src={product.src} alt={product.alt} />
                      <div className="imageDetails text-left">
                        <p className="name">{product.name}</p>
                        <p className="nameDesc">{product.title}</p>
                        <p className="mainPrice">
                          Rp {product.price * 1000}.00
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          {visibleCount < seeMore.length && (
            <div className="ourProductBtn">
              <button className="showMoreBtn" onClick={handleShowMore}>
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
