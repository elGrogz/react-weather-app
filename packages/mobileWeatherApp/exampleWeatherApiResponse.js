export function exampleWeatherResponse() {
  const object = {
    coord: {lon: 2.3488, lat: 48.8534},
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 13.94,
      feels_like: 13.79,
      temp_min: 12.43,
      temp_max: 15.68,
      pressure: 1013,
      humidity: 92,
    },
    visibility: 7000,
    wind: {speed: 1.54, deg: 0},
    clouds: {all: 100},
    dt: 1664013769,
    sys: {
      type: 2,
      id: 2041230,
      country: 'FR',
      sunrise: 1663997979,
      sunset: 1664041545,
    },
    timezone: 7200,
    id: 2988507,
    name: 'Paris',
    cod: 200,
  };

  return object;
}
