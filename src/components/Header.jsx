"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
// react-scroll allows smooth scrolling to page sections by ID
import { Link as ScrollLink } from "react-scroll";


import Logo from "./Logo";
import NavMobile from "./NavMobile";

// Navigation links configuration
// Each `path` MUST match a section's `id` on the page
const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
]; 

const Header = () => {
  return (
    // Sticky header that stays at the top while scrolling
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          {/* Replace with image or Link later */}
          <Logo />

          {/* Navigation & Button */}
          <nav className="hidden xl:flex items-center gap-12">

            {/* Navigation list */}
            <ul className="flex items-center">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="
                    text-white text-sm uppercase font-primary font-medium
                    tracking-[1.2px]
                    after:content-['/'] after:mx-4 after:text-accent
                    last:after:content-none
                  "
                >
                  {/* 
                    ScrollLink handles smooth scrolling
                    - `to` matches section id
                    - `spy` tracks active section
                    - `activeClass` applies when section is active
                  */}
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    offset={-80} // prevents content hiding under sticky header
                    className="cursor-pointer transition-colors duration-200"
                    activeClass="text-accent"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button>
                          <a
              href="#contact"
              className="
                group flex items-center justify-between
                min-w-[200px] h-[54px]
                bg-white
                py-[5px] pl-[10px] pr-[5px]
              "
            >
              {/* Button Text */}
              <span className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                Get a quote
              </span>

              {/* Icon Container */}
              <span className="w-11 h-11 flex items-center justify-center bg-primary">
                <RiArrowRightUpLine
                  className="text-white text-xl transition-transform duration-200 group-hover:rotate-45"
                />
              </span>
            </a>
            </button>

          </nav>

          {/* Nav Mobile */}
          <div className="xl:hidden"><NavMobile /></div>

        </div>
      </div>
    </header>
  );
};

export default Header;

