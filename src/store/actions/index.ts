import { FETCH_API } from "../types";
import axios from "axios";

// https://localfocus2.appspot.com/lf3/geo/00001/00001.json?compress=v1

export function FetchApi() {
  async function test() {
    let response = await fetch(
      `https://coronavirus-tracker-api.herokuapp.com/v2/locations`
    );
    let data = await response.json();
    return data;
  }

  test().then(data => console.log(data));
  const response = axios.get(
    "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
  );
  return {
    type: FETCH_API,
    payload: response
  };
}
