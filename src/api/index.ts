import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});