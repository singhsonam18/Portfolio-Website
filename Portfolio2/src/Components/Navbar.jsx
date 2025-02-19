import React, { useState } from 'react';
import pic from '/pic.jpg'; // Correct import path for Vite
import { IoMenu } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";

import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Contact"
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-3">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="text-xl font-semibold cursor-pointer">
              Sona<span className="text-red-500 text-2xl">m</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className='hover:scale-105 duration-200 cursor-pointer'
                  key={id}>
                  <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}  // Adjusted for fixed header
                    activeClass='active'
                  >{text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className='bg-white'>
            <ul className='md:hidden flex flex-col items-center justify-center space-y-3 text-xl'>
              {navItems.map(({ id, text }) => (
                <li
                  className='hover:scale-105 duration-200 font-semibold cursor-pointer'
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(false)}  // Close menu on click
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}  // Adjusted for fixed header
                    activeClass='active'
                  >{text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
