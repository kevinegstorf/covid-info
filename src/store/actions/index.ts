import { FETCH_API } from "../types";
import axios from "axios";

// https://localfocus2.appspot.com/lf3/geo/00001/00001.json?compress=v1

export function FetchApi() {
  const response = axios.get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
  );
  return {
    type: FETCH_API,
    payload: response
  };
}
