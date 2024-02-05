import {
  CREATE_LOCATION,
  RETRIEVE_LOCATIONS,
} from "./types";

import LocationDataService from "../services/LocationService";

export const createLocation = (title, description) => async (dispatch) => {
  try {
    const res = await LocationDataService.create({ title, description });

    dispatch({
      type: CREATE_LOCATION,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveLocations = () => async (dispatch) => {
  try {
    const res = await LocationDataService.getAll();

    dispatch({
      type: RETRIEVE_LOCATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const findLocationsByTitle = (title) => async (dispatch) => {
  try {
    const res = await LocationDataService.findByLocation(title);

    dispatch({
      type: RETRIEVE_LOCATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
