import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_ORIGIN,
  withCredentials: true,
});
export { axiosInstance };
