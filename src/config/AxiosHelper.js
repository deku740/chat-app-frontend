import axios from "axios";
export const baseURL = "https://chat-app-backend-latest-r0ca.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,

});
