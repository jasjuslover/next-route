import axios from "axios";

const api = axios.create({
  baseURL: "https://6695b4e10312447373bfd91c.mockapi.io",
});

export { api };
