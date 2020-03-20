import { Location } from "../../types";
export const FETCH_API = "FETCH_API";

class FetchAPI {
  readonly type = FETCH_API;
  constructor(
    public payload: {
      data: {
        locations: Array<Location>;
      };
    }
  ) {}
}

export type Actions = FetchAPI;
