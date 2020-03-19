import { FETCH_API } from "../types";

type Action = {
  type: any;
  payload: any;
};

export default function(state = [], action: Action) {
  switch (action.type) {
    case FETCH_API:
      const locations = action.payload.data.locations;
      return [...state, ...locations];
    default:
      return state;
  }
}
