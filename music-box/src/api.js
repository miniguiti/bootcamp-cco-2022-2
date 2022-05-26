import axios from "axios";

const api = axios.create({
    baseURL : "https://6286d0a47864d2883e7a1281.mockapi.io/musicas"
})

export default api;
