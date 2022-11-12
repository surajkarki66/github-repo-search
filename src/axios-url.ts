import axios from "axios";

const baseUrl = "https://api.github.com/";
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default instance;