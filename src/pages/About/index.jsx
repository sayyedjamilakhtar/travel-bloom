import React from "react";
import countryCodes from "../../../public/countryCode";

function index() {
  console.log(countryCodes);
  return (
    <>
      <h1>About page</h1>
      {countryCodes.map((country) => (
        <p>{country.name}</p>
      ))}
    </>
  );
}

export default index;
