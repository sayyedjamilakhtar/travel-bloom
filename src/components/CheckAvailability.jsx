import React from "react";
import Button from "./Button";

function CheckAvailability() {
  return (
    <>
      <form
        action=""
        className="flex flex-col md:flex-row gap-10 w-full flex justify-center items-center md:items-end flex-wrap"
      >
        <div className="flex flex-col">
          <label>CHECK-IN</label>
          <input type="date" className="bg-white p-5 mt-3 text-[18px]" />
        </div>
        <div className="flex flex-col">
          <label>CHECK-OUT</label>
          <input type="date" className="bg-white p-5 mt-3 text-[18px]" />
        </div>
        <div className="flex flex-col">
          <label>ROOMS:</label>
          <select
            name="rooms"
            id="rooms"
            className="bg-white p-5 mt-3 text-[18px] w-[200px]"
          >
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4">4 Rooms</option>
            <option value="5">5 Rooms</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>ADULTS:</label>
          <select
            name="rooms"
            id="rooms"
            className="bg-white p-5 mt-3 text-[18px] w-[200px]"
          >
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>CHILD:</label>
          <select
            name="rooms"
            id="rooms"
            className="bg-white p-5 mt-3 text-[18px] w-[200px]"
          >
            <option value="0">0 Children</option>
            <option value="1">1 Children</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
            <option value="4">4 Children</option>
            <option value="5">5 Children</option>
          </select>
        </div>

        <Button className="!p-5">Check Availability</Button>
      </form>
    </>
  );
}

export default CheckAvailability;
