import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5100/api/location",
  headers: {    
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Content-type": "application/json",
  },
  mode: 'no-cors',
});
