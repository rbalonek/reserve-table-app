import axios from "axios";

const baseUrl = "https://reserve-table-proj.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
