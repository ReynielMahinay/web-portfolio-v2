import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { navLinks } from "../constants";

const NavBar = () => {
  const [sidebar, setSidevbar] = useState(false);

  const showSidebar = () => setSidevbar(!sidebar);

  return (
    <header className="absolute z-10 ">
      <IconContext.Provider value="navbar-color">
        <div className="nav-bar fixed max-sm:justify-end max-sm:pr-5">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav
          className={`${
            sidebar ? "nav-menu active max-sm:-right-[100px]" : "nav-menu"
          }`}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose />
            </li>
            {navLinks.map((item, index) => {
              return (
                <li key={index} className="py-5">
                  <a
                    href={item.href}
                    className="text-semi-white font-montserrat font-bold text-4xl"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default NavBar;
