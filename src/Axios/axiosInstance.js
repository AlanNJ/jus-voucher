import axios from "axios";
import config from "../Constants/config";

const axiosInstance = axios.create({
	baseURL: config.baseURL,
});

export default axiosInstance;
