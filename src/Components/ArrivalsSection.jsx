import { TiStarHalf } from "react-icons/ti";
import { TiStar } from "react-icons/ti";
import Image1 from "../assets/E-commerce/Frame32.png";
import Image2 from "../assets/E-commerce/Frame33.png";
import Image3 from "../assets/E-commerce/Frame34.png";
import Image4 from "../assets/E-commerce/Frame38.png";

const arrivals = [
  {
    src: Image1,
    title: "T-shirt with Tape Details",
    icon: [<TiStar/>, <TiStar/>, <TiStar/>, <TiStar/>, <TiStar/>],
    span: ["5.0/", "5"],
    price: ["$120"],
  },
  {
    src: Image2,
    title: "Skinny Fit Jeans",
    icon: [<TiStar/>, <TiStar/>, <TiStar/>, <TiStar/>],
    span: ["4.0/", "5"],
    price: ["$240", "$260", "-20%"],
  },
  {
    src: Image3,
    title: "Checkered Shirt",
    icon: [<TiStar/>, <TiStar/>, <TiStar/>],
    span: ["3.0/", "5"],
    price: ["$180"],
  },
  {
    src: Image4,
    title: "Sleeve Striped T-shirt",
    icon: [<TiStar/>, <TiStar/>, <TiStar/>, <TiStar/>, <TiStarHalf/>],
    span: ["4.5/", "5"],
    price: ["$130", "$160", "-30%"],
  },
];

const ArrivalsSection = () => {
  return (
    <div className="mt-10 lg:mt-20" id="NewArrivals">
      <h2 className="font-integral font-bold text-3xl lg:text-5xl text-center">
        NEW ARRIVALS
      </h2>
      <div className="grid grid-flow-col lg:grid-cols-4 mt-10 lg:mt-16 lg:justify-items-center px-3 lg:px-10 gap-5 overflow-hidden">
        {arrivals.map((item, index) => (
        <div key={index} className="w-[200px] lg:w-[300px]">
          <img src={item.src} className="" />
          <h3 className="font-satochi font-bold text-base lg:text-lg pt-3 truncate w-full overflow-hidden whitespace-nowrap">
            {item.title}
          </h3>
          <div className="flex items-center space-x-1 mb-2">
            <span className="text-[#FFC633] text-xl lg:text-2xl flex">
             {item.icon}
            </span>
            <span className="text-sm">
              {item.span[0]}<span className="text-black/60">{item.span[1]}</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-satochi font-bold text-xl lg:text-2xl">
            {item.price[0]}
            </span>
            <span className="text-black/40 line-through font-satochi font-bold text-xl lg:text-2xl">
             {item.price[1]}
            </span>
            <span  className={`font-satochi font-medium text-xs px-2 py-1 rounded-full ${
                        item.price[2] ? "text-[#FF3333] bg-[#FF3333]/10" : ""
                      }`}>
             {item.price[2]}
            </span>
          </div>
        </div>
         ))}
      </div>
      <div className="text-center my-10 lg:my-20">
        <button className="border border-black/10 rounded-full px-32 lg:px-20 py-3">
          View All
        </button>
      </div>
      <div className="border border-black/10 mx-5 lg:mx-10"></div>
    </div>
  );
};

export default ArrivalsSection;
