import { API } from "@/constants/constants";
import axios from "axios";

export const clientRickMorty = axios.create({
  baseURL: API.BASE_URL,
  timeout: 10000,
});
