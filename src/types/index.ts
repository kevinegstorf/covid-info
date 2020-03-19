export interface Location {
  coordinates: { latitude: string; longitude: string };
  country: string;
  country_code: string;
  id: number;
  latest: { confirmed: number; deaths: number; recovered: string };
  province: "";
}

export interface State {
  covid: Array<Location>;
}
