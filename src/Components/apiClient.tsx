import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "beebe2c2a1f747258de36088d3bff45c",
  },
});
