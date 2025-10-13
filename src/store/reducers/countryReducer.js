import { COUNTRY_CHANGE } from "../actionType";

const initState = {
  country: "IN",
};

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTRY_CHANGE:
      return { ...state, country: action.payload };

    default:
      return state;
  }
};
