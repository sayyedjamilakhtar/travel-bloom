import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onCountryChange } from "../../store/action";
import countryCodes from "../../../public/countryCode";

function CountrySelector() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(onCountryChange(e.target.value));
  };

  return (
    <>
      <div className="flex justify-center p-5">
        <form action="">
          <select
            onChange={handleChange}
            name="country"
            id="country"
            value="IN"
            className="border-2 p-3"
          >
            {countryCodes.map((country, index) => (
              <React.Fragment key={index}>
                <option value={country.code}>{country.name}</option>
              </React.Fragment>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}

export default CountrySelector;
