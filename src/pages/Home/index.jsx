import React from "react";
import Hero from "../../sections/home/Hero";
import CheckAvailability from "../../components/CheckAvailability";
import CountryCarousel from "../../sections/home/countryCarousel";

function index() {
  return (
    <>
      <Hero />
      <div className="bg-[#FAF5F2] py-10">
        <div className="w-[80%] m-auto">
          <CheckAvailability />
        </div>
      </div>
      <div className="py-10">
        <div className="w-[80%] m-auto">
          <CountryCarousel />
        </div>
      </div>

      <div className="h-screen bg-red-300"></div>
    </>
  );
}

export default index;
