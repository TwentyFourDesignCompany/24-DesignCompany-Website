import "aos/dist/aos.css";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import AOS from "aos";
// COMPONENTS
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer2";

// SCREENS
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutUsPage/AboutPage";
import ProjectDevelopment from "./pages/ProductDevelopmentPage/ProjectDevelpment";
import MobileDevelopment from "./pages/MobileDevelopmentPage/MobileDevelopment";
import DigitalTransformation from "./pages/DigitalTransformation/DigitalTransformation";
import QAPage from "./pages/Q&APage/Q&ATesting";
import UIDevelopment from "./pages/UI-UXPage/UI-UXPage";
import WebDevPage from "./pages/WebDevelopmentPage/WebDevPage";
import CareersPage from "./pages/CareersPage/CareersPage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  AOS.init({
    easing: "ease-in-out",
  });
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/project-development" component={ProjectDevelopment} />
          <Route path="/web-development" component={WebDevPage} />
          <Route path="/careers" component={CareersPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/mobile-development" component={MobileDevelopment} />
          <Route path="/ui-development" component={UIDevelopment} />
          <Route path="/QA-testing" component={QAPage} />
          <Route
            path="/digital-transformation"
            component={DigitalTransformation}
          />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
