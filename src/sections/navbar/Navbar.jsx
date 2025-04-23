import React, { useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="flex gap-1 items-center  logo">
            <Logo />
            Ahmed Othman
          </a>
          <button
            onClick={handleToggleMenu}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>

          <div
            className={`nav-sidebar  top-[72px] ${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <nav className="p-5">
              <NavItems />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
