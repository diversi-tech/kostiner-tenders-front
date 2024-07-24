import axios from 'axios'

const axiosInstance = axios.create({ baseURL: 'https://kostiner-tenders-back.onrender.com/api' })

export default axiosInstance
