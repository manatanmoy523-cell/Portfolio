import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
      to: "home",
    },
    {
      id: 2,
      text: "About",
      to: "about",
    },
    {
      id: 3,
      text: "Projects",
      to: "projects",
    },
    {
      id: 4,
      text: "Experience",
      to: "experiance",
    },
    {
      id: 5,
      text: "Contacts",
      to: "contacts",
    },
  ];

  return (
    <div className="w-full px-4 md:px-20 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpeg" className="h-12 w-12 rounded-full" alt="logo" />

          <div>
            <h1 className="font-semibold text-xl">
              Tanmo<span className="text-green-500 text-2xl">y</span>
            </h1>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-green-500"
                className="cursor-pointer hover:text-green-500 duration-200"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map(({ id, text, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                  className="cursor-pointer text-xl font-semibold hover:text-green-500"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
