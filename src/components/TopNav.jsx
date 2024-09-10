import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ImParagraphJustify } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-100 fixed w-full">
      <div className=" flex flex-wrap items-center justify-between mx-auto px-[30px] py-4">
        {/* This link will be hidden on mobile devices */}
        <a className="flex items-center space-x-3 md:block hidden">Wealthify</a>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          <ImParagraphJustify />
        </button>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
          <div className="flex">
            <Link
              className="flex items-center space-x-2 py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-700"
              to="/dashboard"
            >
              <RxDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex items-center space-x-2 py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-700"
              to="/profile"
            >
              <CgProfile className="w-5 h-5" /> <span>Profile</span>
            </Link>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              User
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
