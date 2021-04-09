import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

// COMPONENTS
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

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
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route
            path="/project-development"
            exact
            component={ProjectDevelopment}
          />
          <Route path="/web-development" exact component={WebDevPage} />
          <Route path="/careers" exact component={CareersPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route
            path="/mobile-development"
            exact
            component={MobileDevelopment}
          />
          <Route path="/ui-development" exact component={UIDevelopment} />
          <Route path="/QA-testing" exact component={QAPage} />
          <Route
            path="/digital-transformation"
            exact
            component={DigitalTransformation}
          />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
