/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const SideNav = () => {
  return (
    <div className="h-full">
      <div className="h-full w-64 bg-gray-100 text-black p-4">
        <ul className="space-y-4">
          <li>
            <Link
              className="flex items-center space-x-2 py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-700"
              to="/dashboard"
            >
              <RxDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 py-2 px-4 rounded hover:text-gray-300 hover:bg-gray-700"
              to="/profile"
            >
              <CgProfile className="w-5 h-5" /> <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
