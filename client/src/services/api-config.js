import axios from "axios";

// const baseUrl = "https://reserve-table-proj.herokuapp.com/" http://localhost:3000

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://reserve-table-proj.herokuapp.com/"
    : "reserve-table-db.fly.dev";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
