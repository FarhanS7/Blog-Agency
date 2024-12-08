import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LogInPage from "./Pages/LogInPage";
import ServicePage from "./Pages/ServicePage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
