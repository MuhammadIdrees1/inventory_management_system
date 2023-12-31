import React, { useState } from "react";
import { FaStore } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { MdInventory, MdDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/signup");
    removeCookie("jwt");
    window.location.reload();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button */}
      {/* <button
        classNameName="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-700 md:hidden"
        onClick={toggleSidebar}
      >
        <span classNameName="sr-only">Open sidebar</span>
        {isOpen ? (
          <svg
            classNameName="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" />
          </svg>
        ) : (
          <svg
            classNameName="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button> */}

      {/* Sidebar */}
      {/* <nav
        classNameName={`fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-56`}
      >
        <div classNameName="py-4 px-6 border-b">
          <h2 classNameName="text-lg font-semibold">Sidebar Title</h2>
        </div>
        <ul classNameName="py-6">
          <li classNameName="px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
            <a href="#">NavLink j1</a>
          </li>
          <li classNameName="px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
            <a href="#">NavLink 2</a>
          </li>
          <li classNameName="px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
            <a href="#">NavLink 3</a>
          </li>
        </ul>
      </nav> */}

      {/* <Topbar /> */}

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 h-screen w-72 -translate-x-full bg-white pt-16 transition-transform  sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-center">
          <h1 className="mb-9 text-4xl font-semibold slashed-zero text-[#1B254B]">
            Smart Stock
          </h1>
        </div>
        <div className="h-full overflow-y-auto  border-t-2 bg-white pl-10 pb-4 pt-7 ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className="flex h-8 items-center p-2  font-bold text-[#A3Aed0]  "
              >
                <MdDashboard className="icon h-6 w-6 text-[#A3Aed0] transition  duration-75" />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="flex h-8 items-center p-2  font-bold text-[#A3Aed0]   "
              >
                <MdInventory
                  className="icon h-6 w-6 text-[#A3Aed0] transition duration-75
                "
                />
                <span className="ml-3">Inventory</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stores"
                className="flex  h-8 items-center p-2  font-bold text-[#A3Aed0]   "
              >
                <FaStore
                  className="icon h-6 w-6 text-[#A3Aed0] transition duration-75
                 "
                />
                <span className="ml-3">Manage Stores</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchaseDetails"
                className="flex h-8 items-center p-2  font-bold text-[#A3Aed0]   "
              >
                <FaStore
                  className="icon h-6 w-6 text-[#A3Aed0] transition duration-75
                 "
                />
                <span className="ml-3">Purchase Details</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/salesDetails"
                className="flex h-8 items-center p-2  font-semibold text-[#A3Aed0]   "
              >
                <FaStore className=" icon h-6 w-6 text-[#A3Aed0] transition duration-75 " />
                <span className="ml-3">Sales Details</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className=" flex h-8 items-center p-2  font-bold text-[#A3Aed0]"
              >
                <GoSignOut className="h-6 w-6 text-[#A3Aed0] transition duration-75  " />
                <span className="ml-3" onClick={logOut}>
                  Log out
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
