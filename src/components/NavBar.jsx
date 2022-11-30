import React, { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  /*{
      id: 3,
      link: "portfolio",
    }, */
  return (
    <div className="flex px-4 bg-black justify-between items-center w-full h-20 text-white fixed">
      <div>
        <h1 className="text-5xl font-rsign ml-2">
          <a href="/">Ramin</a>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize relative group font-medium">
            
            <Link to={link} smooth duration={500}> {link} 
            </Link>
              <div className="absolute w-[65%] h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30}  />}
      </div>
          {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  ">
      {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() =>  setNav(!nav)} to={link} smooth duration={500}> {link} </Link>
          </li>
        ))}
      </ul>
      )}

    </div>
  );
};

export default NavBar;
