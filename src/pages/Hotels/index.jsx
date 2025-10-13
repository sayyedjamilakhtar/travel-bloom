import React from "react";
import HotelCards from "../../sections/hotels/HotelCards";
import CountrySelector from "../../sections/hotels/CountrySelector";
import Pagination from "../../sections/hotels/pagination";

function index() {
  return (
    <>
      <CountrySelector />
      <HotelCards />
      {/* <Pagination /> */}
    </>
  );
}

export default index;
