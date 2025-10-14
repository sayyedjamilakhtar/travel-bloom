import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import HeroImage from "../../assets/home/hero.jpg";

function Hero() {
  return (
    <>
      <div
        className="w-full min-h-[80vh] py-30 relative bg-no-repeat bg-cover bg-full flex before:absolute before:w-full before:h-full before:bg-primary/80 before:left-0 before:top-0"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="w-[80%] m-auto z-99 text-white">
          <p className="text-lg uppercase tracking-widest">Summer Vacations</p>
          <h1 className="text-6xl/20 md:text-8xl/30 max-w-3xl ">
            Luxury Hotel For Vacation.
          </h1>
          <p className="text-xl/8 md:text-2xl/10 max-w-xl my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis
            ridiculus tellus.
          </p>
          <Link to="/travel-bloom/hotels">
            <Button className="bg-white border-white !text-black hover:!text-white">
              Book Room
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
