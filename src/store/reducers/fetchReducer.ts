import { FETCH_API } from "../types";

export default function(state = [], action: any) {
  switch (action.type) {
    case FETCH_API:
      const locations = action.payload.data.locations;
      return [...state, ...locations];
    default:
      return state;
  }
}
