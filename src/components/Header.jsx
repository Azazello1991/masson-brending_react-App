import { Link, NavLink } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Logo from "../images/logo-masons-shop.svg";
import Categorys from "./headerComponents/Categorys";
import Cabinet from "./headerComponents/Cabinet";
import SearchHead from "./headerComponents/SearchHead";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div class="container">
        <div class="header__top">
          <SearchHead />

          <Link to='/' class="logo">
            <img
              class="logo__icon"
              src={Logo}
              width="184"
              height="63"
              alt="logo"
            ></img>
          </Link>

          <Cabinet />

          {/*  <button class="burger burger-index--open" type="button">
              <span class="burger__line"></span>
              <span class="sr-only tr">Відкрити меню</span>
            </button> */}
        </div>

        <Categorys />
      </div>
    </header>
  );
};

export default Header;
