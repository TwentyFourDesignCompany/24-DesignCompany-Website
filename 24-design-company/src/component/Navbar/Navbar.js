import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

import Logo from "../../assets/images/24 Design Company.png";
// ICONS
import Icon1 from "../../assets/icons/Icon1.svg";
import Icon2 from "../../assets/icons/Icon2.svg";
import Icon3 from "../../assets/icons/Icon3.svg";
import Icon4 from "../../assets/icons/Icon4.svg";
import Icon5 from "../../assets/icons/Icon5.svg";
import Icon6 from "../../assets/icons/Icon6.svg";

function Navbar() {
  const history = useHistory();
  const {
    location: { pathname: routeName },
  } = history;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showDropdown = () => {
    setDropdown(true);
  };
  const MouseExit = () => {
    setDropdown(false);
  };
  const hideDropdown = () => {
    closeMobileMenu();
    setDropdown(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    if (routeName === "/") {
      setNavColor(false);
    } else {
      setNavColor(true);
    }
  }, [routeName]);
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBarBackground);
  return (
    // <IconContext.Provider value={{ color: "#fff" }}>

    <nav
      className={
        navbar ? "navbar-containers bg-active" : "containers navbar-containers"
      }
    >
      <NavLink to="/" className="navbar-logo lg:mt-6" onClick={closeMobileMenu}>
        <img src={Logo} alt="24  Design Logo" />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* NAV_DROPDOWN */}

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/about"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item dropdown-cont">
          <div
            className={
              navColor === true
                ? "nav-links nav-links-change nav-drop"
                : "nav-links nav-drop"
            }
            // className="nav-links nav-drop"
          >
            Services
          </div>
          <div className="drop-menu absolute min-w-full  mt-24 grid lg:grid-cols-3 ">
            {/* Single content */}
            <div className="single-nav ">
              <NavLink
                to="/project-development"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon1} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Product Development Service
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text  text-primary-main">
                    End-to-End Product Development Services To Help You Stay
                    Competitive in the Market
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* Single content */}
            <div className="single-nav ">
              <NavLink
                to="/web-development"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon2} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Web Application Development
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text  text-primary-main">
                    Custom web applications designed to meet specific business
                    challenges
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* Single content */}
            <div className="single-nav">
              <NavLink
                to="/mobile-development"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon3} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Mobile Development Service
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    Robust Mobile Applications For Improved Client And Workforce
                    Engagement
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* Single content */}
            <div className="single-nav">
              <NavLink
                to="/ui-development"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon4} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    UI/UX
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    End-to-End Product Development Services To Help You Stay
                    Competitive in the Market
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* Single content */}
            <div className="single-nav">
              <NavLink
                to="/digital-transformation"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon5} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Digital Transformation
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    Custom web applications designed to meet specific business
                    challenges
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* Single content */}
            <div className="single-nav">
              <NavLink
                to="/QA-testing"
                className="single-sublink flex flex-row"
                onClick={closeMobileMenu}
              >
                <div className="mr-5 block mt-1">
                  <img src={Icon6} alt="Icon" />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    QA & Testing
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    Robust Mobile Applications For Improved Client And Workforce
                    Engagement
                  </h6>
                </div>
              </NavLink>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/careers"
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/blog"
            onClick={closeMobileMenu}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={
              navColor === true ? "nav-links nav-links-change" : "nav-links"
            }
            // className="nav-links"
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>

    // </IconContext.Provider>
  );
}

export default Navbar;
