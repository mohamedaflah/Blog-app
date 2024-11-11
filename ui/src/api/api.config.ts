import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "blog-app-production-742a.up.railway.app/api",
  withCredentials: true,
});
export { axiosInstance };
