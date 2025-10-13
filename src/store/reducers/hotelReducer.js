import {
  GET_HOTELS_FAILURE,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_REQUEST,
} from "../actionType";

const initState = {
  loading: false,
  hotels: [],
  error: null,
};

export const hotelReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_HOTELS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: action.payload,
      };

    case GET_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
