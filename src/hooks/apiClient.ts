import axios, { CanceledError } from "axios";

const key = import.meta.env.VITE_APP_APICLIENT;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_APICLIENT,
  },
});
