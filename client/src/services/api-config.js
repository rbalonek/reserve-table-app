import axios from "axios";

// const baseUrl = "https://reserve-table-proj.herokuapp.com/";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://reserve-table-proj.herokuapp.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
