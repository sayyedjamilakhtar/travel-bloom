import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/travel-bloom" element={<Home />} />
        <Route path="/travel-bloom/about-us" element={<About />} />
        <Route path="/travel-bloom/hotels" element={<Hotels />} />
        <Route path="/travel-bloom/blog" element={<Blog />} />
        <Route path="/travel-bloom/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
