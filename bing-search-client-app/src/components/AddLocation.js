import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createLocation } from "../actions/locations";

const AddLocation = () => {
  const initialLocationState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [location, setLocation] = useState(initialLocationState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLocation({ ...location, [name]: value });
  };

  const saveLocation = () => {
    const { title, description } = location;

    dispatch(createLocation(title, description))
      .then(data => {
        setLocation({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newLocation = () => {
    setLocation(initialLocationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newLocation}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={location.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={location.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveLocation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddLocation;
