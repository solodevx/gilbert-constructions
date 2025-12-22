"use client";

// react-scroll allows smooth scrolling to page sections by ID
import { Link as ScrollLink } from "react-scroll";

// Navigation links configuration
// Each `path` MUST match a section's `id` on the page
const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const Header = () => {
  return (
    // Sticky header that stays at the top while scrolling
    <header className="sticky top-0 bg-primary py-4">
      <div className="container mx-auto">
        {/* Navigation list */}
        <ul className="flex gap-12 text-white">
          {links.map((link, index) => (
            <li key={index}>
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
                className="cursor-pointer transition-colors"
                activeClass="text-accent"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
