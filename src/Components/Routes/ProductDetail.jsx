import { IoIosArrowForward, IoMdRemove, IoIosArrowDown } from "react-icons/io";
import { TiStarHalf, TiStar } from "react-icons/ti";
import { GoCheck } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiSoundModuleFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { CgMoreAlt } from "react-icons/cg";
import { useState, useEffect } from "react";
import Image1 from "../../assets/E-commerce/image1.png";
import Image2 from "../../assets/E-commerce/image5.png";
import Image3 from "../../assets/E-commerce/image6.png";
import Image4 from "../../assets/E-commerce/Frame32(2).png";
import Image5 from "../../assets/E-commerce/Frame33(2).png";
import Image6 from "../../assets/E-commerce/Frame34(2).png";
import Image7 from "../../assets/E-commerce/Frame38(2).png";



const testimonials = [
  {
    title: "Samantha D.",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    posted: "Posted on August 14, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
  },
  {
    title: "Alex M.",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    posted: "Posted on August 15, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />],
  },
  {
    title: "Ethan R.",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    posted: "Posted on August 16, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
  },
  {
    title: "Olivia P.",
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    posted: "Posted on August 17, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />],
  },
  {
    title: "Liam K.",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    posted: "Posted on August 18, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />],
  },
  {
    title: "Ava H.",
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    posted: "Posted on August 19, 2023",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
  },
];

const images = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];
const colors = ["#4F4631", "#314F4A", "#31344F"];
const sizes = ["Small", "Medium", "Large", "X-Large"];

const Tshirts = () => {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(images[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 920);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const testimonial = isMobile ? testimonials.slice(0, 3) : testimonials;


  return (
    <div>
      <div className="border border-black/10 mx-5 lg:mx-20"></div>
      <div className="flex items-center space-x-1 pl-5 lg:pl-20 pt-5">
        <p className="flex items-center text-black/60">
          Home
          <span className="px-2 text-lg">
            <IoIosArrowForward />
          </span>
        </p>
        <p className="flex items-center text-black/60">
          Shop
          <span className="px-2 text-lg">
            <IoIosArrowForward />
          </span>
        </p>
        <p className="flex items-center text-black/60">
          Men
          <span className="px-2 text-lg">
            <IoIosArrowForward />
          </span>
        </p>
        <p>T-shirts</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-14 mt-8 px-5">
        <div className="flex flex-col lg:flex-row-reverse space-y-2 lg:space-y-1">
          <img
            src={image.src}
            className="rounded-3xl object-cover w-[358px] h-[290px] lg:w-[444px] lg:h-[530px] m-auto"
          />
          <div className="flex lg:flex-col lg:space-y-3 space-x-3 lg:space-x-0 lg:px-3 mx-auto">
            {images.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item.src}
                className="object-cover rounded-2xl cursor-pointer border hover:border-black w-[111px] h-[106px] lg:w-[155px] lg:h-[170px]"
              />
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl w-[300px] lg:w-full lg:text-4xl font-integral font-bold">
            ONE LIFE GRAPHIC T-SHIRT
          </h2>
          <div className="flex items-center text-yellow-400 text-2xl lg:text-3xl py-3">
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStarHalf />
            <p className="text-black text-sm lg:text-base">4.5/<span className="text-black/60">5</span></p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-satochi font-bold text-xl lg:text-3xl">
              $260
            </span>
            <span className="text-black/40 line-through font-satochi font-bold text-xl lg:text-3xl">
              $300
            </span>
            <span className="text-[#FF3333] bg-[#FF3333]/10 font-satochi font-medium text-base px-2 py-1 rounded-full">
              -40%
            </span>
          </div>
          <p className="text-xs lg:text-base font-satochi text-black/60 py-3 w-[318px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div className="my-5">
            <h3 className="mb-3 md:mt-5 md:text-lg font-satochi text-black/60">
              Select Colors
            </h3>
            <div className="flex space-x-3">
              {colors.map((colorIndex) => (
                <button
                  key={colorIndex}
                  onClick={() => setColor(colorIndex)}
                  className={`w-10 h-10 rounded-full ${
                    color === colorIndex ? <GoCheck /> : ""
                  }`}
                  style={{ backgroundColor: colorIndex.toLowerCase() }}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <h3 className="mb-3 md:text-lg">Choose Size</h3>
            <div className="flex space-x-3">
              {sizes.map((sizeIndex) => (
                <button
                  key={sizeIndex}
                  onClick={() => setSize(sizeIndex)}
                  className={`px-3 py-1 border rounded-full ${
                    size === sizeIndex
                      ? "bg-black text-white"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {sizeIndex}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex items-center space-x-5 mb-4 my-5">
            <label
              htmlFor=""
              className="flex items-center bg-[#F0F0F0] rounded-full py-3 px-5"
            >
              <span className="text-2xl">
                <IoMdRemove />
              </span>
              <input
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="text-center bg-[#F0F0F0] w-10 lg:w-24"
              />
              <span className="text-2xl">
                <FaPlus />
              </span>
            </label>
            <a
              href=""
              className="text-center bg-black text-white py-3 w-full rounded-full"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex items-center justify-between border-b-2 mx-5 lg:mx-20 md:px-20 lg:px-40">
          <span className="text-black/60 font-satochi text-base lg:text-xl">
            Product Details
          </span>
          <span className="font-satochi text-base lg:text-xl border-b-2 pb-3 md:w-60 lg:w-[410px] text-center border-black">
            Rating & Reviews
          </span>
          <span className="text-black/60 font-satochi text-base lg:text-xl">FAQs</span>
        </div>
        <div className="flex items-center justify-between px-5 lg:px-20 mt-5">
          <p className="font-satochi font-bold text-lg lg:text-xl">
            All Reviews
            <span className="text-black/60 text-sm font-normal px-2">
              (451)
            </span>
          </p>
          <div className="flex items-center space-x-3">
            <button className="bg-[#F0F0F0] rounded-full p-3 text-xl lg:text-2xl">
              <RiSoundModuleFill />
            </button>
            <p className="lg:flex items-center bg-[#F0F0F0] rounded-full py-3 px-5 font-medium font-satochi hidden">
              Latest
              <span className="px-3">
                <IoIosArrowDown />
              </span>
            </p>
            <a
              href=""
              className="font-satochi font-medium bg-black text-sm lg:text-base text-white px-4 lg:px-8 py-3 rounded-full"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 px-5 lg:px-20 gap-5 mt-5">
        {testimonial.map((item, index) => (
          <div
            key={index}
            className="space-y-3 border-2 rounded-3xl p-5 m-auto"
          >
            <span className="flex text-yellow-400 text-2xl relative">
              {item.icon}
              <span className="absolute right-0 text-black/40">
                <CgMoreAlt />
              </span>
            </span>
            <h3 className="font-satochi font-bold text-lg flex items-center">
              {item.title}
              <span className="text-[#01AB31] px-1">
                <MdVerified />
              </span>
            </h3>
            <p className="font-satochi text-black/60 max-w-xs lg:max-w-md text-sm">
              "{item.text}"
            </p>
            <p className="font-satochi font-medium text-black/60">
              {item.posted}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="font-satochi font-medium border-2 rounded-full text-black px-8 py-3 mt-10 mx-auto">
          Load More Reviews
        </button>
      </div>

      <div className="mt-20">
        <h2 className="font-integral font-bold text-4xl w-[300px] lg:text-5xl text-center m-auto">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-flow-col lg:grid-cols-4 mt-10 lg:mt-16 lg:justify-items-center px-5 lg:px-20 gap-5 mb-48 overflow-hidden">
          <div className="w-[200px] lg:w-[250px]">
            <img src={Image4} className="" />
            <h3 className="font-satochi font-bold text-base lg:text-xl pt-3">
              T-shirt with Tape Details
            </h3>
            <div className="flex items-center">
              <span className="text-[#FFC633] text-xl lg:text-2xl flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </span>
              <span className="text-sm">
                4.5/<span className="text-black/60">5</span>
              </span>
            </div>
            <span className="font-satochi font-bold text-xl lg:text-2xl">
              $120
            </span>
          </div>
          <div className="w-[200px] lg:w-[250px]">
            <img src={Image5} className="" />
            <h3 className="font-satochi font-bold text-base lg:text-xl pt-3">
              Skinny Fit Jeans
            </h3>
            <div className="flex items-center">
              <span className="text-[#FFC633] text-xl lg:text-2xl flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </span>
              <span className="text-sm">
                3.5/<span className="text-black/60">5</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-satochi font-bold text-xl lg:text-2xl">
                $240
              </span>
              <span className="text-black/40 line-through font-satochi font-bold text-xl lg:text-2xl">
                $260
              </span>
              <span className="text-[#FF3333] bg-[#FF3333]/10 font-satochi font-medium text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </div>
          </div>
          <div className="w-[200px] lg:w-[250px]">
            <img src={Image6} alt="" />
            <h3 className="font-satochi font-bold text-base lg:text-xl pt-3">
              Checkered Shirt
            </h3>
            <div className="flex items-center">
              <span className="text-[#FFC633] text-xl lg:text-2xl flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </span>
              <span className="text-sm">
                4.5/<span className="text-black/60">5</span>
              </span>
            </div>
            <span className="font-satochi font-bold text-xl lg:text-2xl">
              $180
            </span>
          </div>
          <div className="w-[200px] lg:w-[250px]">
            <img src={Image7} alt="" />
            <h3 className="font-satochi font-bold text-base lg:text-xl pt-3">
              Sleeve Striped T-shirt
            </h3>
            <div className="flex items-center">
              <span className="text-[#FFC633] text-xl lg:text-2xl flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </span>
              <span className="text-sm">
                4.5/<span className="text-black/60">5</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-satochi font-bold text-xl lg:text-2xl">
                $130
              </span>
              <span className="text-black/40 line-through font-satochi font-bold text-xl lg:text-2xl">
                $160
              </span>
              <span className="text-[#FF3333] bg-[#FF3333]/10 font-satochi font-medium text-xs px-2 py-1 rounded-full">
                -30%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirts;
