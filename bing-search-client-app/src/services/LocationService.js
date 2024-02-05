import http from "../http-common";

const getAll = () => {
  return http.get("/GetLocations");
};

const get = locationName => {
  return http.get(`/GetLocation?locationName=${locationName}`);
};

const create = data => {
  return http.post("/AddLocation", data);
};

const findByLocation = locationName => {
  return http.get(`/GetLocation?locationName=${locationName}`);
};

const LocationService = {
  getAll,
  get,
  create,
  findByLocation
};

export default LocationService;
