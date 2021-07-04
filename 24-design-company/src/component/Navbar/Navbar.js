import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

import Logo from "../../assets/images/24 Design Company.png";
import Logo1 from "../../assets/images/24 Design Company_RGB-02.png";
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
        <img
          src={
            (routeName === "/about" ||
              routeName == "/project-development" ||
              routeName === "/web-development" ||
              routeName === "/mobile-development" ||
              routeName === "/ui-development" ||
              routeName === "/QA-testing" ||
              routeName === "/digital-transformation") &&
            window.scrollY <= 60
              ? Logo1
              : Logo
          }
          alt="24  Design Logo"
          className="w-40 h-20"
        />
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon1}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10  "
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Product Development Service
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text  text-primary-main">
                    End-to-End Product Development Services to help you stay
                    competitive in the market.24 Design Company, we understand
                    that a solid grasp of your business sector and excellent
                    development approach is equally critical in our development
                    process.
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon2}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10 w-7 h-10"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Web Application Development
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text  text-primary-main">
                    Our web applications are marked by a robust, scalable
                    architecture that supports high performance requirements and
                    ease of management without compromising security.
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon3}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10 w-10 h-10"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    Mobile Development Service
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    We develop powerful applications that provide a thrilling
                    experience for your users and bring tangible value to your
                    business. Whether native, hybrid or cross platform, our
                    mobile development team delivers solutions that run
                    seamlessly on all major operating systems and all major
                    mobile devices
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon4}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    UI/UX
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    User experience and user interface design for all types of
                    websites, SaaS, and web/mobile apps. We combine the latest
                    UI/UX trends with our customers’ individual goals and needs
                    to deliver intuitive, vibrant, and impactful designs that
                    power up businesses.
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon5}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10"
                  />
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
                <div className="mr-5 block  single-services-icon-cont">
                  <img
                    src={Icon6}
                    alt="Icon"
                    className=" single-services-icon block lg:w-40 lg:h-10"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm lg:text-base sub-links text-left   text-primary-main">
                    QA & Testing
                  </h6>
                  <h6 className="font-light text-xs sub-links text-left mt-3 w-full sub-link-text text-primary-main">
                    Rigorous testing and Quality assurance help us deliver top
                    notch digital products, everytime. 24 Design Company’s QA
                    team of experts is there to guarantee you don't lose
                    precious time and money fixing issues that can be spotted
                    early and deliver a smooth, bug-free experience to your
                    users on all screen
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
