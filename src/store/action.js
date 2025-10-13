import axios from "axios";
import {
  GET_HOTELS_FAILURE,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_REQUEST,
} from "./actionType";
import { COUNTRY_CHANGE } from "./actionType";

export const onCountryChange = (value) => {
  return {
    type: COUNTRY_CHANGE,
    payload: value,
  };
};

export const onGettingHotels = (countryCode, cityName, hotelName) => {
  return async (dispatch) => {
    // Starting API call...
    dispatch({ type: GET_HOTELS_REQUEST });

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": "sand_590cc1d2-3428-47fd-8a8b-9afea306e7f9",
      },
      params: {
        countryCode: countryCode,
        cityName: cityName,
        hotelName: hotelName,
      },
    };

    try {
      // Making API request...
      const response = await axios.get(
        `https://api.liteapi.travel/v3.0/data/hotels`,
        options
      );

      const hotelsData = response.data.data;
      console.log(hotelsData);

      dispatch({
        type: GET_HOTELS_SUCCESS,
        payload: hotelsData,
      });
    } catch (error) {
      console.log("API Error:", error);
      dispatch({
        type: GET_HOTELS_FAILURE,
        payload: error.message,
      });
    }
  };
};
