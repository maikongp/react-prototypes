import axios from "axios";

const api = axios.create({
    baseURL: "https://623db835e8fbc4f16266839c.mockapi.io/",
});

export default api;