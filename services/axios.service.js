import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.1.3:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
