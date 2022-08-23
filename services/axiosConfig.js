import axios from "axios"
const url = "http://localhost:3000/api/"
const axiosInstance = axios.create({
  // withCredentials: process.env.REACT_APP_STATE === 'PRODUCTION',
  baseURL: url
})

export default axiosInstance
