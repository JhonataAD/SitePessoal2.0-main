import axios from "axios";

const api = axios.create({
   baseURL: "https://nuvem-json.onrender.com",
});

export default api;

 