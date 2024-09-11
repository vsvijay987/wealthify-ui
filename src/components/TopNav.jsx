import { useState } from "react";
import { ImParagraphJustify } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/wealthify-transparent.png";
import { FaCoins } from "react-icons/fa";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-gray-200 fixed w-full">
      <div className=" flex flex-wrap items-center justify-between mx-auto px-[30px] py-1">
        <a className="flex items-center space-x-3 md:block text-white hidden">
          <img src={logo} alt="Wealthify" className="h-[35px] w-auto" />
        </a>

        <button onClick={toggleMenu} className="md:hidden">
          <ImParagraphJustify />
        </button>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
          <div className="flex space-x-6">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex text-white items-center space-x-2 py-2 px-4 hover:text-gray-300 hover:bg-gray-700 ${
                  isActive ? "border-b-2 border-primary" : ""
                }`
              }
            >
              <RxDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex text-white items-center space-x-2 py-2 px-4 hover:text-gray-300 hover:bg-gray-700 ${
                  isActive ? "border-b-2 border-primary" : ""
                }`
              }
              to="/product"
            >
              <FaCoins className="w-5 h-5" /> <span>Product</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
