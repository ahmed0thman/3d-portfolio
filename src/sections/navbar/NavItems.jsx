import React from "react";
import { navLinks } from "../../consts/index";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={`nav-link-${id}`} className="nav-li">
          <a href={href}>{name}</a>
        </li>
      ))}
      {/* <li className="hidden lg:block">
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/ahmed0thman"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon cursor-pointer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-othman-208b9b151/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon cursor-pointer"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </li> */}
    </ul>
  );
};

export default NavItems;
