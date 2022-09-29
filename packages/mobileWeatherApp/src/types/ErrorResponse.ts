export interface ErrorResponse {
  weather: Weather;
}

interface Weather {
  cod: string;
  message: string;
}
