import { FETCH_API, Actions } from "../types";

export default function(state = [], action: Actions) {
  switch (action.type) {
    case FETCH_API:
      const locations = action.payload.data.locations;
      return [...state, ...locations];
    default:
      return state;
  }
}
