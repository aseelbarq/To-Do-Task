import axios from "axios";

const urlHandler = () => {
  return "http://localhost:4000/";
};

const axiosInstance = axios.create({
  baseURL: urlHandler(),
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export default axiosInstance;