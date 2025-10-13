import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { onGettingHotels } from "../store/action";

function SearchPopup() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [cityName, setCityName] = useState("");
  const countryCode = useSelector((state) => state.country);

  // useEffect(() => {}, [searchValue]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCityName(searchValue);
    dispatch(onGettingHotels(`${countryCode.country}`, "", `${searchValue}`));
  };

  // console.log(cityName);

  return (
    <>
      <div className="flex justify-center p-8">
        <form
          action=""
          className="relative border flex justify-between items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search hotel..."
            className="w-full p-3 min-w-[500px]"
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
