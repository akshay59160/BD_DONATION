// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div>
//       <Link to="/Blood">Blood</Link>
//       <Link to="/Registration">regester</Link>
//     </div>
//   )
// }

// export default Header

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import img from "../Blood/assetss/bnation.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav className="nav" ref={navRef}>
        <Link onClick={showNavbar} to="/" className="site-title">
          <img src={img} className="logo_image" alt="logo_image" />
        </Link>
        <ul className="links-ul">
          <CustomLink onClick={showNavbar} to="/">
            HOME
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/Registration">
            DONATE
          </CustomLink>
          <CustomLink className="get_blood" onClick={showNavbar} to="/Blood">
            GET BLOOD
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/CampRegistrations">
            CAMPS
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/about">
            ABOUT
          </CustomLink>
        </ul>
        <li className="login-ul ">
          <button onClick={showNavbar} className="btn-sign">
            <SignedOut>
              <SignInButton className="signinBtn" />
            </SignedOut>
          </button>
          <div onClick={showNavbar} className="login-in">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </li>
      </nav>
      <nav>
        <div className="logo_image_mob_div">
          <Link to="/" className="site-title">
            <img src={img} className="logo_image_mob" />
          </Link>
        </div>
        <button className="nav-btn  " onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
