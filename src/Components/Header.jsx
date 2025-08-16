import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="flex items-center justify-between px-5 lg:px-20 py-5">
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <h2 className="font-integral font-bold text-3xl">SHOP.CO</h2>
        <nav className="font-satochi items-center space-x-5 hidden lg:flex">
          <button className="group relative">
            <span className="flex items-center">
              Shop
              <IoIosArrowDown />
            </span>
            <div className="flex flex-col items-center absolute top-full -left-4 rounded-lg p-5 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 group-hover:scale-y-100 origin-top duration-200 z-50">
              <NavLink
                className="border rounded-xl bg-black text-white px-5 py-1"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="border rounded-xl bg-black text-white px-5 py-1"
                to="/Tshirts"
              >
                T-shirts
              </NavLink>
              <NavLink
                className="border rounded-xl bg-black text-white px-5 py-1"
                to="/Casual"
              >
                Casual
              </NavLink>
            </div>
          </button>
          <Link to="/#OnSale">On Sale</Link>
          <Link to="/#NewArrivals">New Arrivals</Link>
          <Link to="/#Brands">Brands</Link>
        </nav>
        <form action="" className="relative hidden lg:flex">
          <label htmlFor="" className="flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for products..."
              className="bg-[#F0F0F0] focus:border-[#F0F0F0] w-[500px] h-[48px] rounded-full px-14"
            />
            <FiSearch className="absolute text-gray-500 text-2xl bottom-3 left-5" />
          </label>
        </form>
        <div className="flex space-x-5 text-2xl">
          <NavLink className="lg:hidden" to="">
            <FiSearch />
          </NavLink>
          <NavLink to="/Cart">
            <LuShoppingCart />
          </NavLink>
          <NavLink to="">
            <CgProfile />
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <nav className="flex font-medium space-x-5 px-5 py-3">
          <button className="group relative">
            <span className="flex items-center bg-black text-white p-1 rounded-lg">
              Shop
              <IoIosArrowDown />
            </span>
            <div className="flex items-center absolute z-50 top-full left-0 rounded-lg my-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200 space-x-2 px-2">
              <NavLink
                className="border bg-white px-3 py-1 rounded-lg"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="border bg-white px-4 py-1 rounded-lg"
                to="/Tshirts"
              >
                T-shirts
              </NavLink>
              <NavLink
                className="border bg-white px-3 py-1 rounded-lg"
                to="/Casual"
              >
                Casual
              </NavLink>
            </div>
          </button>
          <Link className="bg-black text-white p-1 rounded-lg" to="/#OnSale">
            On Sale
          </Link>
          <Link
            className="bg-black text-white p-1 rounded-lg"
            to="/#NewArrivals"
          >
            New Arrivals
          </Link>
          <Link className="bg-black text-white p-1 rounded-lg" to="/#Brands">
            Brands
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
