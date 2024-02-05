import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveLocations,
  findLocationsByTitle,
} from "../actions/locations";
import { Link } from "react-router-dom";

const LocationsList = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const locations = useSelector(state => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveLocations());
  });

  const onChangeSearchLocation = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentLocation(null);
    setCurrentIndex(-1);
  };

  const setActiveLocation = (location, index) => {
    setCurrentLocation(location);
    setCurrentIndex(index);
  };
 
  const findByLocation = () => {
    refreshData();
    dispatch(findLocationsByTitle(searchTitle));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchTitle}
            onChange={onChangeSearchLocation}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByLocation}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Locations List</h4>

        <ul className="list-group">
          {locations &&
            locations.map((location, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveLocation(location, index)}
                key={index}
              >
                {location.title}
              </li>
            ))}
        </ul>
       
      </div>
      <div className="col-md-6">
        {currentLocation ? (
          <div>
            <h4>location</h4>
            <div>
              <label>
                <strong>Location Name:</strong>
              </label>{" "}
              {currentLocation.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentLocation.description}
            </div>

            <Link
              to={"/locations/" + currentLocation.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationsList;
