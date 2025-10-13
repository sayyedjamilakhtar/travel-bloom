// import React, { useEffect, useState } from "react";
// import CarouselImage1 from "../../assets/home/carousel-location01.jpg";
// import CarouselImage2 from "../../assets/home/carousel-location02.jpg";
// import CarouselImage3 from "../../assets/home/carousel-location03.jpg";
// import CarouselImage4 from "../../assets/home/carousel-location04.jpg";
// import CarouselImage5 from "../../assets/home/carousel-location05.jpg";
// import CarouselImage6 from "../../assets/home/carousel-location06.jpg";

// function CountryCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(1);

//   const [carouselItem, setCarouselItem] = useState([
//     {
//       country: "United States",
//       details: "237 rooms are available. 16 meeting & events",
//       image: CarouselImage1,
//     },
//     {
//       country: "Japan",
//       details: "189 rooms are available. 12 meeting & events",
//       image: CarouselImage2,
//     },
//     {
//       country: "China",
//       details: "312 rooms are available. 20 meeting & events",
//       image: CarouselImage3,
//     },
//     {
//       country: "India",
//       details: "156 rooms are available. 8 meeting & events",
//       image: CarouselImage4,
//     },
//     {
//       country: "Dubai",
//       details: "278 rooms are available. 15 meeting & events",
//       image: CarouselImage5,
//     },
//     {
//       country: "Abu Dhabi",
//       details: "203 rooms are available. 10 meeting & events",
//       image: CarouselImage6,
//     },
//   ]);

//   const carouselItemList = carouselItem.map((item, index) => {
//     return (
//       <div key={index}>
//         <div
//           className="h-[600px] min-w-[400px]  bg-cover p-10 text-white"
//           style={{ backgroundImage: `url(${item.image})` }}
//         >
//           <div className="max-w-[200px]">
//             <h3 className="text-3xl font-bold mb-3">{item.country}</h3>
//             <p className="text-lg">{item.details}</p>
//           </div>
//         </div>
//       </div>
//     );
//   });

//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsToShow(carouselItem.length);
//       } else {
//         setCardsToShow(1);
//       }
//     };
//     updateCardsToShow();

//     window.addEventListener("resize", updateCardsToShow);

//   }, [carouselItem]);

//   const nextProject = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItem.length);
//     console.log(currentIndex);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselItem.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <div className="flex justify-end gap-10">
//         <h1 onClick={prevProject}>left</h1>
//         <h1 onClick={nextProject}>right</h1>
//       </div>
//       <div className="overflow-hidden">
//         <div
//           className="flex flex-nowrap gap-10 transition-all duration-500"
//           id="countryCarousel"
//           style={{
//             transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
//           }}
//         >
//           {carouselItemList}
//         </div>
//       </div>
//     </>
//   );
// }

// export default CountryCarousel;

import React, { useEffect, useState, useMemo, useCallback } from "react";
import CarouselImage1 from "../../assets/home/carousel-location01.jpg";
import CarouselImage2 from "../../assets/home/carousel-location02.jpg";
import CarouselImage3 from "../../assets/home/carousel-location03.jpg";
import CarouselImage4 from "../../assets/home/carousel-location04.jpg";
import CarouselImage5 from "../../assets/home/carousel-location05.jpg";
import CarouselImage6 from "../../assets/home/carousel-location06.jpg";

// --- Constants for easier configuration ---
const DESKTOP_ITEMS_TO_SHOW = 4;
const MOBILE_ITEMS_TO_SHOW = 1;
const DESKTOP_BREAKPOINT = 1224; // Tailwind's 'lg' breakpoint

function CountryCarousel() {
  const carouselItemData = useMemo(
    () => [
      {
        country: "United States",
        details: "237 rooms are available...",
        image: CarouselImage1,
      },
      {
        country: "Japan",
        details: "189 rooms are available...",
        image: CarouselImage2,
      },
      {
        country: "China",
        details: "312 rooms are available...",
        image: CarouselImage3,
      },
      {
        country: "India",
        details: "156 rooms are available...",
        image: CarouselImage4,
      },
      {
        country: "Dubai",
        details: "278 rooms are available...",
        image: CarouselImage5,
      },
      {
        country: "Abu Dhabi",
        details: "203 rooms are available...",
        image: CarouselImage6,
      },
    ],
    []
  );

  // State to manage how many items are visible
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth >= DESKTOP_BREAKPOINT
      ? DESKTOP_ITEMS_TO_SHOW
      : MOBILE_ITEMS_TO_SHOW
  );

  // The number of items to clone is based on the max number of slides shown
  const itemsToClone = DESKTOP_ITEMS_TO_SHOW;

  const [currentIndex, setCurrentIndex] = useState(itemsToClone);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create cloned items for the infinite loop based on the max items shown
  const loopedCarouselItems = useMemo(() => {
    if (carouselItemData.length === 0) return [];
    const firstItems = carouselItemData.slice(0, itemsToClone);
    const lastItems = carouselItemData.slice(-itemsToClone);
    return [...lastItems, ...carouselItemData, ...firstItems];
  }, [carouselItemData, itemsToClone]);

  // Update slides to show on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setSlidesToShow(DESKTOP_ITEMS_TO_SHOW);
      } else {
        setSlidesToShow(MOBILE_ITEMS_TO_SHOW);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    // Check if we are at the start clone
    if (currentIndex < itemsToClone) {
      setIsTransitioning(false);
      setCurrentIndex(carouselItemData.length + currentIndex);
    }
    // Check if we are at the end clone
    else if (currentIndex >= carouselItemData.length + itemsToClone) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - carouselItemData.length);
    }
  }, [currentIndex, carouselItemData.length, itemsToClone]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextProject = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevProject = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Calculate the width of a single slide as a percentage
  const slideWidth = 100 / slidesToShow;

  return (
    <>
      <div className="flex justify-end gap-10 p-4">
        <button onClick={prevProject} className="text-xl cursor-pointer">
          Previous
        </button>
        <button onClick={nextProject} className="text-xl cursor-pointer">
          Next
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            // The transform calculation is now dynamic
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {loopedCarouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 box-border p-2" // Use padding for spacing
              style={{ width: `${slideWidth}%` }} // Dynamic width for each item
            >
              <div
                className="h-[600px] bg-cover bg-center p-10 text-white flex flex-col justify-end rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="max-w-xs">
                  <h3 className="text-3xl font-bold mb-3">{item.country}</h3>
                  <p className="text-lg">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryCarousel;
