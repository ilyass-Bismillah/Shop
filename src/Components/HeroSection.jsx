import Image1 from "../assets/E-commerce/Vector(1).png";
import Image2 from "../assets/E-commerce/Vector.png";
import Image3 from "../assets/E-commerce/Rectangle2.png";

const HeroSection = () => {
  return (
    <>
      <div className="lg:bg-hero-image lg:h-screen bg-no-repeat bg-center bg-cover py-10 px-5 lg:py-28 lg:px-20 relative bg-[#F2F0F1]">
        <h2 className="font-integral font-bold text-4xl lg:text-6xl max-w-sm lg:max-w-xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="font-satochi max-w-md lg:max-w-xl py-6 mb-5 text-black/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          className="bg-black text-white font-satochi font-medium px-28 py-5 rounded-full"
        >
          Shop Now
        </button>
        <div className="lg:flex mt-10 lg:mt-24 font-satochi space-x-5">
          <div className="flex space-x-8 justify-center">
            <div>
              <span className="font-bold text-4xl lg:text-5xl">200+</span>
              <p className="text-black/60 text-sm lg:text-base">
                International Brands
              </p>
            </div>
            <div className="border border-black/10"></div>
            <div className="">
              <span className="font-bold text-4xl lg:text-5xl">2,000+</span>
              <p className="text-black/60 text-sm lg:text-base">
                High-Quality Products
              </p>
            </div>
          </div>
          <div className="border border-black/10 hidden lg:block"></div>
          <div className="text-center mt-5 lg:mt-0">
            <span className="font-bold text-4xl lg:text-5xl">30,000+</span>
            <p className="text-black/60 text-sm lg:text-base">
              Happy Customers
            </p>
          </div>
        </div>
        <div>
          <img
            src={Image1}
            className="absolute -bottom-44 lg:right-[40%] lg:top-[40%]"
          />
          <img src={Image2} className="absolute right-0 -bottom-32 lg:top-32"/>
        </div>
      </div>
      <div className="lg:hidden">
        <img src={Image3} className="w-full h-full" />
      </div>
    </>
  );
};

export default HeroSection;
