import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { TiStarHalf, TiStar } from "react-icons/ti";
import { GoCheck } from "react-icons/go";
import { CgMoreAlt } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Image1 from "../../assets/E-commerce/Frame33(2).png";
import Image2 from "../../assets/E-commerce/Frame34(2).png";
import Image3 from "../../assets/E-commerce/Frame38(2).png";
import Image4 from "../../assets/E-commerce/Frame33.png";
import Image5 from "../../assets/E-commerce/Frame34.png";
import Image6 from "../../assets/E-commerce/Frame38.png";
import Image7 from "../../assets/E-commerce/Frame32(1).png";
import Image8 from "../../assets/E-commerce/Frame33(1).png";
import Image9 from "../../assets/E-commerce/Frame71(1).png";

const casuals = [
  {
    src: Image1,
    title: "Gradient Graphic T-shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
    span: ["3.5/", "5"],
    price: ["$145"],
  },
  {
    src: Image2,
    title: "Polo with Tipping Details",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
    span: ["4.5/", "5"],
    price: ["$180"],
  },
  {
    src: Image3,
    title: "Black Striped T-shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStar />],
    span: ["5.0/", "5"],
    price: ["$120", "$150", "-30%"],
  },
  {
    src: Image4,
    title: "Skinny Fit Jeans",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
    span: ["3.5/", "5"],
    price: ["$240", "$260", "-20%"],
  },
  {
    src: Image5,
    title: "Checkered Shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
    span: ["4.5/", "5"],
    price: ["$180"],
  },
  {
    src: Image6,
    title: "Sleeve Striped T-shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStarHalf />],
    span: ["4.5/", "5"],
    price: ["$130", "$160", "-30%"],
  },
  {
    src: Image7,
    title: "Vertical Striped Shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />, <TiStar />],
    span: ["5.0/", "5"],
    price: ["$212", "$232", "-20%"],
  },
  {
    src: Image8,
    title: "Courage Graphic T-shirt",
    icon: [<TiStar />, <TiStar />, <TiStar />, <TiStar />],
    span: ["4.0/", "5"],
    price: ["$145"],
  },
  {
    src: Image9,
    title: "Loose Fit Bermuda Shorts",
    icon: [<TiStar />, <TiStar />, <TiStar />],
    span: ["3.0/", "5"],
    price: ["$80"],
  },
];

const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const Category = () => {
  const [min, setMin] = useState(50);
  const [max, setMax] = useState(200);
  const [color, setColor] = useState(colors[5]);
  const [size, setSize] = useState(sizes[4]);

  const [OpenFilter, setOpenFilter] = useState(false);
  const filterOpen = () => setOpenFilter(true);
  const filterClose = () => setOpenFilter(false);

  return (
    <div className="">
      <div className="border border-black/10 mx-5 lg:mx-20"></div>
      <div className="flex items-center space-x-1 pl-5 lg:pl-20 pt-5">
        <p className="flex items-center text-black/60">
          Home
          <span className="px-2 text-lg">
            <IoIosArrowForward />
          </span>
        </p>
        <p>Casual</p>
      </div>
      <div className="lg:flex lg:px-20 mt-5 gap-5 justify-center px-5">
      
        <div className="border-2 rounded-3xl w-[295px] h-[1120px] p-5 hidden lg:block">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-satochi font-bold text-lg">Filters</h3>
            <button className="text-xl lg:text-2xl text-black/40">
              <RiSoundModuleFill />
            </button>
          </div>
          <hr />
          <div className="py-5 space-y-2">
            <p className="flex items-center justify-between text-black/60">
              T-shirts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Shorts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Shirts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Hoodie
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Jeans
              <span>
                <IoIosArrowForward />
              </span>
            </p>
          </div>
          <hr />
          <div className="pt-5 pb-3">
            <div className="flex items-center justify-between ">
              <h3 className="font-satochi font-bold text-lg">Price</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="w-44 py-3 rounded-md m-auto">
              <div className="relative h-1 bg-[#F0F0F0] rounded-full">
                <div
                  className="absolute h-1 bg-[#000000]"
                  style={{
                    left: `${((min - 50) / (200 - 50)) * 100}%`,
                    right: `${100 - ((max - 50) / (200 - 50)) * 100}%`,
                  }}
                />

                <input
                  type="range"
                  min="50"
                  max="200"
                  value={min}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), max - 1);
                    setMin(val);
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-[#000000]
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:appearance-none
               [&::-moz-range-thumb]:w-4
               [&::-moz-range-thumb]:h-4
               [&::-moz-range-thumb]:bg-[#000000]
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:cursor-pointer
               [&::-moz-range-thumb]:pointer-events-auto"
                />

                <input
                  type="range"
                  min="50"
                  max="200"
                  value={max}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), min + 1);
                    setMax(val);
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-[#000000]
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:appearance-none
               [&::-moz-range-thumb]:w-4
               [&::-moz-range-thumb]:h-4
               [&::-moz-range-thumb]:bg-[#000000]
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:cursor-pointer
               [&::-moz-range-thumb]:pointer-events-auto"
                />
              </div>
              <div className="flex justify-between text-sm text-black mt-3 font-satochi font-medium">
                <span>${min}</span>
                <span>${max}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-5">
            <div className="flex">
              <h3 className="font-satochi font-bold text-lg">Colors</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="grid grid-cols-5 gap-y-2 mt-3">
              {colors.map((colorIndex) => (
                <button
                  key={colorIndex}
                  onClick={() => setColor(colorIndex)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    color === colorIndex ? "" : ""
                  }`}
                  style={{ backgroundColor: colorIndex.toLowerCase() }}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="font-satochi font-bold text-lg">Size</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {sizes.map((sizeIndex) => (
                <button
                  key={sizeIndex}
                  onClick={() => setSize(sizeIndex)}
                  className={`py-2 rounded-full text-sm ${
                    size === sizeIndex
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-black/60"
                  }`}
                >
                  {sizeIndex}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="font-satochi font-bold text-lg">Dress Style</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="py-3 space-y-2">
              <p className="flex items-center justify-between text-black/60">
                Casual
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Formal
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Party
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Gym
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
            <div className="mt-1">
              <button className="bg-black text-white text-sm w-full py-3 rounded-full">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
    
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-satochi font-bold">Casual</h2>
              <p className="text-black/60 text-sm lg:hidden">
                Showing 1-10 of 100 Products
              </p>
            </div>
            <div className="flex bg-[#F0F0F0] rounded-full p-2 lg:hidden">
              <button onClick={filterOpen}>
                <RiSoundModuleFill />
              </button>
            </div>
            <div className="lg:flex hidden">
              <p className="text-black/60 lg:pr-3">
                Showing 1-10 of 100 Products
              </p>
              <p className="flex text-black/60">
                Sort by:
                <span className="flex text-black items-center">
                  Most Popular
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3 justify-items-center">
            {casuals.map((item, index) => (
              <div key={index}>
                <img
                  src={item.src}
                  className="w-[170px] h-[174px] lg:w-[295px] lg:h-[298px]"
                />
                <div>
                  <p className="font-satochi font-bold text-base lg:text-lg pt-3 truncate w-40 lg:w-full">
                    {item.title}
                  </p>
                  <div className="flex items-center py-1">
                    <span className="text-[#FFC633] text-lg lg:text-xl flex">
                      {item.icon}
                    </span>
                    <span className="text-sm px-1">
                      {item.span[0]}
                      <span className="text-black/60">{item.span[1]}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-satochi font-bold text-xl lg:text-2xl">
                      {item.price[0]}
                    </span>
                    <span className="text-black/40 line-through font-satochi font-bold text-xl lg:text-2xl">
                      {item.price[1]}
                    </span>
                    <span
                      className={`font-satochi font-medium text-xs px-2 py-1 rounded-full ${
                        item.price[2] ? "text-[#FF3333] bg-[#FF3333]/10" : ""
                      }`}
                    >
                      {item.price[2]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between mb-48 lg:mb-0">
            <div className="flex items-center font-satochi font-medium border px-3 py-2 text-xs lg:text-sm rounded-lg">
              <span className="pr-3">
                <FaArrowLeft />
              </span>
              <button>Previous</button>
            </div>
            <div className="flex items-center text-center font-satochi font-medium">
              <span className="bg-black/5 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 rounded-lg py-2">
                1
              </span>
              <span className="text-black/50 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 py-2">
                2
              </span>
              <span className="text-black/50 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 py-2 hidden lg:block">
                3
              </span>
              <span className="text-black/50 px-3 pt-2">
                <CgMoreAlt />
              </span>
              <span className="text-black/50 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 py-2 hidden lg:block">
                8
              </span>
              <span className="text-black/50 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 py-2">
                9
              </span>
              <span className="text-black/50 text-sm lg:text-base w-8 h-8 lg:w-10 lg:h-10 py-2">
                10
              </span>
            </div>
            <div className="flex items-center font-satochi font-medium border px-3 py-2 text-xs lg:text-sm rounded-lg">
              <button>Next</button>
              <span className="pl-3">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      {OpenFilter && ( 
        <div className="border-2 rounded-3xl w-full h-[1050px] p-5 absolute inset-0 z-50 bg-white mt-16">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-satochi font-bold text-xl">Filters</h3>
            <button onClick={filterClose} className="text-xl lg:text-2xl text-black/40">
              <FiX size={30}/>
            </button>
          </div>
          <hr />
          <div className="py-5 space-y-2">
            <p className="flex items-center justify-between text-black/60">
              T-shirts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Shorts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Shirts
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Hoodie
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p className="flex items-center justify-between text-black/60">
              Jeans
              <span>
                <IoIosArrowForward />
              </span>
            </p>
          </div>
          <hr />
          <div className="pt-5 pb-3">
            <div className="flex items-center justify-between ">
              <h3 className="font-satochi font-bold text-xl">Price</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="w-64 py-3 rounded-md m-auto mt-3">
              <div className="relative h-1 bg-[#F0F0F0] rounded-full">
                <div
                  className="absolute h-1 bg-[#000000]"
                  style={{
                    left: `${((min - 50) / (200 - 50)) * 100}%`,
                    right: `${100 - ((max - 50) / (200 - 50)) * 100}%`,
                  }}
                />

                <input
                  type="range"
                  min="50"
                  max="200"
                  value={min}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), max - 1);
                    setMin(val);
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-[#000000]
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:appearance-none
               [&::-moz-range-thumb]:w-4
               [&::-moz-range-thumb]:h-4
               [&::-moz-range-thumb]:bg-[#000000]
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:cursor-pointer
               [&::-moz-range-thumb]:pointer-events-auto"
                />

                <input
                  type="range"
                  min="50"
                  max="200"
                  value={max}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), min + 1);
                    setMax(val);
                  }}
                  className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:bg-[#000000]
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-moz-range-thumb]:appearance-none
               [&::-moz-range-thumb]:w-4
               [&::-moz-range-thumb]:h-4
               [&::-moz-range-thumb]:bg-[#000000]
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:cursor-pointer
               [&::-moz-range-thumb]:pointer-events-auto"
                />
              </div>
              <div className="flex justify-between text-sm text-black mt-3 font-satochi font-medium">
                <span>${min}</span>
                <span>${max}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-5">
            <div className="flex items-center justify-between">
              <h3 className="font-satochi font-bold text-xl">Colors</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-y-2 mt-3">
              {colors.map((colorIndex) => (
                <button
                  key={colorIndex}
                  onClick={() => setColor(colorIndex)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    color === colorIndex ? "" : ""
                  }`}
                  style={{ backgroundColor: colorIndex.toLowerCase() }}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="font-satochi font-bold text-lg">Size</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {sizes.map((sizeIndex) => (
                <button
                  key={sizeIndex}
                  onClick={() => setSize(sizeIndex)}
                  className={`py-2 rounded-full text-sm ${
                    size === sizeIndex
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-black/60"
                  }`}
                >
                  {sizeIndex}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="font-satochi font-bold text-lg">Dress Style</h3>
              <button>
                <IoIosArrowUp />
              </button>
            </div>
            <div className="py-3 space-y-3">
              <p className="flex items-center justify-between text-black/60">
                Casual
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Formal
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Party
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p className="flex items-center justify-between text-black/60">
                Gym
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
            <div className="mt-1">
              <button className="bg-black text-white text-sm w-full py-3 rounded-full">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
         )}
    </div>
  );
};

export default Category;
