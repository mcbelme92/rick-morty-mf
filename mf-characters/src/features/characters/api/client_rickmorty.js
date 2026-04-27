import { API } from "@/features/characters/api/constants";
import axios from "axios";

export const client_rickmorty = axios.create({
  baseURL: API.BASE_URL,
  timeout: 10000,
});

client_rickmorty.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error?.response?.status;

    console.error("API_ERROR", {
      status,
      message: error?.message,
    });

    if (status === 429) {
      console.warn("Rate limit exceeded");
    }

    return Promise.reject(error);
  },
);
