import axios from "axios";

export const api: any = axios.create({
  baseURL: "https://reqres.in/api/",
});
