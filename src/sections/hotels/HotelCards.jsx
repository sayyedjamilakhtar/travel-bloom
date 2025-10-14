import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGettingHotels } from "../../store/action";
import CarouselImage1 from "../../assets/home/carousel-location01.jpg";
import { MdLocationOn } from "react-icons/md";

function HotelCards() {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((state) => state.hotels);
  const country = useSelector((state) => state.country);

  // Fetch data on country change
  useEffect(() => {
    dispatch(onGettingHotels(country.country));
  }, [country]);

  // Implementing Pagination logic
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(12);

  const handleMore = () => {
    setFirstValue((prev) => prev + 12);
    setSecondValue((prev) => prev + 12);
  };

  if (loading)
    return <h1 className="text-6xl text-center p-10">Loading hotels...</h1>;
  if (error) return <p>Error: {error}</p>;

  // ✅ only render when data exists
  if (hotels && hotels.length > 0) {
    const hotelList = hotels
      .slice(`${firstValue}`, `${secondValue}`)
      .map((hotel) => (
        <div key={hotel.id} className="flex border-2 p-4 gap-5 ">
          <img
            src={hotel.main_photo === "" ? CarouselImage1 : hotel.main_photo}
            alt={hotel.name}
            className="w-20% max-w-[250px] min-w-[250px] h-[250px] object-cover object-center"
          />
          <div>
            <h1 className="mb-5 text-xl font-bold">{hotel.name}</h1>
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-xl text-[#c77a63]" />{" "}
              {hotel.address}
            </p>
          </div>
        </div>
      ));

    return (
      <>
        <div className="flex flex-col flex-wrap gap-10 max-w-[980px] w-[80%] m-auto">
          {hotelList}
        </div>
        <div className="flex justify-center py-10">
          <button className="border-2 px-5 py-3 m-auto" onClick={handleMore}>
            Load More
          </button>
        </div>
      </>
    );
  }
}

export default HotelCards;
