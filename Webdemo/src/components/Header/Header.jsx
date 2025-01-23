import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom"; // Ensure you import NavLink for navigation
import pic from "../../../src/logo.png"; // Assuming this is the correct path to your logo

function Header() {
  const [menu, setMenu] = useState(false);

  const Navitems = [
    {
      id: 1,
      path: "/home",
      text: "Home",
    },
    {
      id: 2,
      path: "/",
      text: "Grid",
    },
    {
      id: 3,
      path: "/linkedin",
      text: "LinkedIn",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-16 rounded-full" alt="logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Venu <span className="text-green-500 text-2xl">V</span>
              <p className="text-sm">Student</p>
            </h1>
          </div>

          {/* Right side */}
          <div>
            {/* Desktop device navbar */}
            <ul className="hidden md:flex space-x-8">
              {Navitems.map(({ id, path, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <NavLink
                    to={path} // Use NavLink to navigate
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu bar for small devices */}
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {!menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
          </div>
        </div>

        {/* Small device navbar */}
        {menu && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
            <ul className="flex flex-col items-center justify-center space-y-4 py-4">
              {Navitems.map(({ id, path, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <NavLink to={path} onClick={() => setMenu(false)}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
