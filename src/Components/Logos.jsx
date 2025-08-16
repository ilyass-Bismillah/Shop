import Image1 from "../assets/E-commerce/Group.png";
import Image2 from "../assets/E-commerce/zara-logo-11.png";
import Image3 from "../assets/E-commerce/gucci-logo-11.png";
import Image4 from "../assets/E-commerce/prada-logo-11.png";
import Image5 from "../assets/E-commerce/Group(1).png";

const Logos = () => {
  return (
    <div
      className="bg-black lg:flex items-center justify-center space-x-3 place-items-center lg:space-x-20 py-10 px-32"
      id="Brands"
    >
      <div className="flex items-center space-x-6 lg:space-x-20 pb-5 lg:pb-0 justify-center">
        <img src={Image1} className="w-32 lg:w-44" />
        <img src={Image2} className="w-20 lg:w-44" />
        <img src={Image3} className="w-32 lg:w-44" />
      </div>
      <div className="flex space-x-6 lg:space-x-20 items-center justify-center">
        <img src={Image4} className="w-32 lg:w-44" />
        <img src={Image5} className="w-32 lg:w-44" />
      </div>
    </div>
  );
};

export default Logos;
