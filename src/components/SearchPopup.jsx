import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { onGettingHotels } from "../store/action";
import { useNavigate } from "react-router-dom";

function SearchPopup() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const countryCode = useSelector((state) => state.country);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/travel-bloom/hotels");
    dispatch(onGettingHotels(`${countryCode.country}`, "", `${searchValue}`));
  };

  // console.log(cityName);

  return (
    <>
      <div className="flex justify-center p-6">
        <form
          action=""
          className="relative border flex justify-between items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search hotel..."
            className="w-full p-3 min-w-[500px] bg-white"
            onChange={handleChange}
          />

          <button className="absolute right-3">
            <CiSearch />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchPopup;
