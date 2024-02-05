import {
  CREATE_LOCATION,
  RETRIEVE_LOCATIONS,
} from "../actions/types";

const initialState = [];

const locationReducer = (locations = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_LOCATION:
      return [...locations, payload];

    case RETRIEVE_LOCATIONS:
      return payload;

    default:
      return locations;
  }
};

export default locationReducer;