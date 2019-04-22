import axios from "axios";

export default axios.create({
  baseURL: "https://simple-events-api.herokuapp.com/api/events",
  headers: {
    "Content-Type": "application/json"
  }
});
