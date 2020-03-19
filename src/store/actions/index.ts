import { FETCH_API } from "../types";
import axios from "axios";

export function FetchApi() {
  const response = axios.get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
  );
  return {
    type: FETCH_API,
    payload: response
  };
}
