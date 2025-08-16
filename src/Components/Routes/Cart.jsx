import { IoIosArrowForward, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import Image1 from "../../assets/E-commerce/Frame33(3).png";
import Image2 from "../../assets/E-commerce/Frame72.png";
import Image3 from "../../assets/E-commerce/Frame71.png";
import { useState } from "react";

const cartItems = [
  {
    src: Image1,
    title: "Gradient Graphic T-shirt",
    icon: <RiDeleteBin6Fill />,
    size: "Large",
    color: "White",
    price: "$145",
  },
  {
    src: Image2,
    title: "Checkered Shirt",
    icon: <RiDeleteBin6Fill />,
    size: "Medium",
    color: "Red",
    price: "$180",
  },
  {
    src: Image3,
    title: "Skinny Fit Jeans",
    icon: <RiDeleteBin6Fill />,
    size: "Large",
    color: "Blue",
    price: "$240",
  },
];

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  
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
        <p>Cart</p>
      </div>
      <h2 className="font-integral font-bold text-3xl lg:text-5xl pl-5 lg:pl-20 pt-5">YOUR CART</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-5 px-5 lg:px-20 mt-6">
        <div className="flex flex-col border rounded-3xl px-3 lg:px-5 lg:w-3/5">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center lg:justify-start w-full my-3 lg:my-5 relative">
              <img src={item.src} className="w-28 h-28 lg:w-32 lg:h-32" />
              <div className="pl-3 w-4/5">
                <div className="flex items-center justify-between">
                <h3 className="font-satochi font-bold text-sm lg:text-xl">
                  {item.title}
                </h3>
                <span className="text-red-500 text-xl">{item.icon}</span>
                </div>
                <p className="font-satochi text-sm">
                  Size: <span className="text-black/60">{item.size}</span>
                </p>
                <p className="font-satochi text-sm">
                  Color: <span className="text-black/60">{item.color}</span>
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl lg:text-2xl font-satochi font-bold">{item.price}</span>
                  <label
                    htmlFor=""
                    className="flex items-center bg-[#F0F0F0] rounded-full py-1 px-3 lg:py-2 lg:px-5"
                  >
                    <span className="text-lg">
                      <IoMdRemove />
                    </span>
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="text-center bg-[#F0F0F0] w-10"
                    />
                    <span className="text-lg">
                      <FaPlus />
                    </span>
                  </label>
                </div>
              </div>
              <div className="absolute border-b w-full -bottom-3 lg:-bottom-5"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col border rounded-3xl p-5 lg:w-2/5 h-full space-y-3 mb-10 lg:mb-0">
          <h3 className="text-xl lg:text-2xl font-satochi font-bold mb-2">Order Summary</h3>
          <p className="flex items-center justify-between font-satochi text-black/60 font-medium lg:text-lg">Subtotal<span className="font-bold font-satochi lg:text-xl text-black">$565</span></p>
          <p className="flex items-center justify-between font-satochi text-black/60 font-medium lg:text-lg">Discount (-20%)<span className="font-bold font-satochi lg:text-xl text-red-500">-$113</span></p>
          <p className="flex items-center justify-between font-satochi text-black/60 font-medium lg:text-lg">Delivery Fee<span className="font-bold font-satochi lg:text-xl text-black">$15</span></p>
          <hr />
          <p className="flex items-center justify-between font-satochi text-black font-medium lg:text-lg">Total<span className="font-bold font-satochi text-xl lg:text-2xl">$467</span></p>
          <div className="flex items-center space-x-3">
          <label htmlFor="" className="w-3/4 relative">
            <input type="text" name="text" id="text" placeholder="Add promo code" className="bg-[#F0F0F0] text-black/40 w-full rounded-full py-3 px-10 text-sm"/>
            <span className="text-black/60 text-xl absolute left-3 top-3"><GoTag /></span>
          </label>
          <button className="text-white bg-black w-1/4 py-3 lg:py-2 rounded-full text-sm">Apply</button>
          </div>
          <button className="flex items-center justify-center bg-black text-white w-full py-4 rounded-full text-sm">Go to Checkout<span className="px-3 text-xl"><FaArrowRight /></span></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
