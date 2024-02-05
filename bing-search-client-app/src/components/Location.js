import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import LocationDataService from "../services/LocationService";

const Location = (props) => {
  const initialLocationState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentLocation, setCurrentLocation] = useState(initialLocationState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const GetLocation = id => {
    LocationDataService.get(id)
      .then(response => {
        setCurrentLocation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetLocation(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentLocation({ ...currentLocation, [name]: value });
  };

    
  return (
    <div>
      {currentLocation ? (
        <div className="edit-form">
          <h4>Location</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Search Nearby Location</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentLocation.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentLocation.description}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
        </div>
      )}
    </div>
  );
};

export default Location;
