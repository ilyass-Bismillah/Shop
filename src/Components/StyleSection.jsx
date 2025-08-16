import Image1 from "../assets/E-commerce/Frame61.png";
import Image2 from "../assets/E-commerce/Frame62.png";
import Image3 from "../assets/E-commerce/Frame64.png";
import Image4 from "../assets/E-commerce/Frame63.png";

const StyleSection = () => {
  return (
    <div className="bg-[#F0F0F0] rounded-[2rem] mx-5 lg:mx-10 mt-10">
      <h2 className="font-integral font-bold text-4xl lg:text-5xl text-center pt-10 lg:pt-20">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="py-10 lg:py-16 flex flex-col items-center justify-center gap-5 px-5 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-5">
          <img src={Image1} className="h-48 w-full lg:h-full" />
          <img src={Image2} className="h-48 w-full lg:h-full" />
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <img src={Image3} className="h-48 w-full lg:h-full" />
          <img src={Image4} className="h-48 w-full lg:h-full" />
        </div>
      </div>
    </div>
  );
};

export default StyleSection;
