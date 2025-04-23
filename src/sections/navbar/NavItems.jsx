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
    </ul>
  );
};

export default NavItems;
