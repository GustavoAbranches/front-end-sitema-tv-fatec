import axios from "axios";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

const apiImage = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
});

export default apiImage;
