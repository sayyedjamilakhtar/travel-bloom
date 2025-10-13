import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import SearchPopup from "./SearchPopup";

function Navbar() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  useEffect(() => {
    if (showPhoneMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPhoneMenu]);

  return (
    <>
      <div className="flex justify-between p-5 items-center shadow-xl">
        <Link to="/travel-bloom">
          <h1 className="text-3xl ">Travel Bloom</h1>
        </Link>

        <div className="flex gap-10 max-lg:hidden">
          <Link to="/travel-bloom">Home</Link>
          <Link to="/travel-bloom/about-us">About Us</Link>
          <Link to="/travel-bloom/hotels">Hotels</Link>
          <Link to="/travel-bloom/blog">Blog</Link>
          <Link to="/travel-bloom/contact-us">Contact Us</Link>
        </div>

        <div onClick={() => setShowPhoneMenu(true)} className="lg:hidden">
          <HiMenu className="text-3xl text-black cursor-pointer" />
        </div>

        <div className="flex items-center gap-8">
          <CiSearch className="text-2xl cursor-pointer max-lg:hidden" />
          <Link to="/contact-us">
            <Button variant="outlined">Book your stay</Button>
          </Link>
        </div>
      </div>

      {/* Phone Menu  */}
      <div
        className={`bg-white ${
          showPhoneMenu ? "w-full h-screen fixed" : "w-0 h-0"
        } top-0 right-0 overflow-hidden z-99999 lg:hidden transition-all`}
      >
        <div
          className="flex justify-end mb-10"
          onClick={() => setShowPhoneMenu(false)}
        >
          <IoClose className="text-5xl m-5" />
        </div>
        <div className="flex flex-col text-6xl text-center gap-20">
          <Link to="/travel-bloom" onClick={() => setShowPhoneMenu(false)}>
            Home
          </Link>
          <Link
            to="/travel-bloom/about-us"
            onClick={() => setShowPhoneMenu(false)}
          >
            About Us
          </Link>
          <Link
            to="/travel-bloom/hotels"
            onClick={() => setShowPhoneMenu(false)}
          >
            Hotels
          </Link>
          <Link to="/travel-bloom/blog" onClick={() => setShowPhoneMenu(false)}>
            Blog
          </Link>
          <Link
            to="/travel-bloom/contact-us"
            onClick={() => setShowPhoneMenu(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <SearchPopup />
    </>
  );
}

export default Navbar;
