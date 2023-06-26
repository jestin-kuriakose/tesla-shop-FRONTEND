import axios from "axios";

const baseURL = process.env.NODE_ENV == "development" ? "http://localhost:3000" : "https://frail-slip-ox.cyclic.app"

export default axios.create({
    baseURL
})