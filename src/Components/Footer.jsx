import { TfiEmail } from "react-icons/tfi";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Image1 from "../assets/E-commerce/Visa.png";
import Image2 from "../assets/E-commerce/MasterCard.png";
import Image3 from "../assets/E-commerce/PayPal.png";
import Image4 from "../assets/E-commerce/ApplePay.png";
import Image5 from "../assets/E-commerce/GooglePay.png";

const Footer = () => {
  return (
    <div className="relative bg-[#F0F0F0] mt-36">
      <div className="absolute bg-black text-white flex flex-col lg:flex-row items-center justify-between px-5 lg:px-14 py-7 lg:py-10 rounded-3xl lg:space-x-24 -top-36 lg:-top-24 inset-x-5 lg:inset-x-20">
        <h2 className="font-integral font-bold text-3xl lg:text-4xl text-center w-[320px] lg:w-[550px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form
          action=""
          className="relative flex flex-col items-center space-y-3 lg:space-y-4 mt-8 lg:mt-0"
        >
          <label htmlFor="" className="flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter your email address"
              className="text-black/40 w-full rounded-full px-14 py-3 relative"
            />
            <span className="absolute text-gray-500 text-2xl top-3 left-5">
              <TfiEmail />
            </span>
          </label>
          <button className="w-full bg-white text-black rounded-full py-3 font-satochi font-medium">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className="flex flex-col lg:flex-row pt-48 px-5 lg:pt-36 lg:px-20 lg:space-x-20">
        <div className="">
          <h3 className="font-integral font-bold text-3xl mb-2 lg:mb-6">
            SHOP.CO
          </h3>
          <p className="w-[255px] text-sm text-black/60 font-satochi font-medium mb-5 lg:mb-9">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex items-center space-x-3 mb-7 lg:mb-0">
            <span className="bg-white text-black p-2 rounded-full border-2">
              <FaTwitter />
            </span>
            <span className="bg-black text-white p-2 rounded-full border-2">
              <FaFacebookF />
            </span>
            <span className="bg-white text-black p-2 rounded-full border-2">
              <FaInstagram />
            </span>
            <span className="bg-white text-black p-2 rounded-full border-2">
              <FaGithub />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-5 lg:flex lg:space-x-20">
          <div className="flex flex-col space-y-4">
            <h4 className="font-satochi font-semibold text-lg">COMPANY</h4>
            <a className="font-satochi font-medium text-black/60" href="">
              About
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Features
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Works
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Career
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-satochi font-semibold text-lg">HELP</h4>
            <a className="font-satochi font-medium text-black/60" href="">
              Customer Support
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Delivery Details
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Terms & Conditions
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-satochi font-semibold text-lg">FAQ</h4>
            <a className="font-satochi font-medium text-black/60" href="">
              Account
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Manage Deliveries
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Orders
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Payments
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-satochi font-semibold text-lg">RESOURCES</h4>
            <a className="font-satochi font-medium text-black/60" href="">
              Free eBooks
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Development Tutorial
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              How to - Blog
            </a>
            <a className="font-satochi font-medium text-black/60" href="">
              Youtube Playlist
            </a>
          </div>
        </div>
      </div>
      <div className="border border-black/10 mx-5 lg:mx-10 mt-14 mb-3"></div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 pb-16 mt-5 lg:mt-0">
        <p className="text-black/60 font-satochi font-medium">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex space-x-3 mt-3 lg:mt-0">
          <img src={Image1} className="w-10 lg:w-14" />
          <img src={Image2} className="w-10 lg:w-14" />
          <img src={Image3} className="w-10 lg:w-14" />
          <img src={Image4} className="w-10 lg:w-14" />
          <img src={Image5} className="w-10 lg:w-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
