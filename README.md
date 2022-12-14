# Weather App Monorepo

This monorepo contains a basic weather app (started from Tyler Potts's app [here](https://www.youtube.com/watch?v=GuA0_Z1llYU&t=6s)), split into a web-based React version and a React Native mobile version.

I'm using it as an opportunity to practice the following:

- React
- React Native
- APIs
- Monorepos (yarn workspaces)
- Testing (Detox, React test library)
- Debugging on mobile
- Typescript
- React native styling

### Weather condition groups

- [x] Thunderstorm day
- [x] Thunderstorm night
- [x] Drizzle day
- [x] Drizzle night (use rain night?)
- [x] Rain day
- [x] Rain night
- [x] Snow day
- [x] Snow night
- [x] Atmosphere (kind of a misc group for dust, fog, tornado, etc. Just use default image to start with)
- [x] Clear day
- [x] Clear night
- [x] Clouds day
- [x] Clouds night

### Example OpenWeather API `/weather` response

```json
{
  "coord": { "lon": 2.3488, "lat": 48.8534 },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 13.94,
    "feels_like": 13.79,
    "temp_min": 12.43,
    "temp_max": 15.68,
    "pressure": 1013,
    "humidity": 92
  },
  "visibility": 7000,
  "wind": { "speed": 1.54, "deg": 0 },
  "clouds": { "all": 100 },
  "dt": 1664013769,
  "sys": {
    "type": 2,
    "id": 2041230,
    "country": "FR",
    "sunrise": 1663997979,
    "sunset": 1664041545
  },
  "timezone": 7200,
  "id": 2988507,
  "name": "Paris",
  "cod": 200
}
```

### Example OpenWeather API `/forecast` response

```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1665079200,
      "main": {
        "temp": 22.34,
        "feels_like": 22.38,
        "temp_min": 21.08,
        "temp_max": 22.34,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1022,
        "humidity": 67,
        "temp_kf": 1.26
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": { "all": 0 },
      "wind": { "speed": 1.25, "deg": 256, "gust": 2.24 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-06 18:00:00"
    },
    {
      "dt": 1665090000,
      "main": {
        "temp": 21.59,
        "feels_like": 21.61,
        "temp_min": 20.1,
        "temp_max": 21.59,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 1022,
        "humidity": 69,
        "temp_kf": 1.49
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": { "all": 33 },
      "wind": { "speed": 0.53, "deg": 16, "gust": 1.06 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-06 21:00:00"
    },
    {
      "dt": 1665100800,
      "main": {
        "temp": 20.01,
        "feels_like": 19.95,
        "temp_min": 18.84,
        "temp_max": 20.01,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 1021,
        "humidity": 72,
        "temp_kf": 1.17
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 66 },
      "wind": { "speed": 1.36, "deg": 26, "gust": 1.56 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-07 00:00:00"
    },
    {
      "dt": 1665111600,
      "main": {
        "temp": 17.92,
        "feels_like": 17.65,
        "temp_min": 17.92,
        "temp_max": 17.92,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1020,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.82, "deg": 27, "gust": 2.17 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-07 03:00:00"
    },
    {
      "dt": 1665122400,
      "main": {
        "temp": 17.84,
        "feels_like": 17.46,
        "temp_min": 17.84,
        "temp_max": 17.84,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1020,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.7, "deg": 21, "gust": 2.27 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-07 06:00:00"
    },
    {
      "dt": 1665133200,
      "main": {
        "temp": 22.76,
        "feels_like": 22.37,
        "temp_min": 22.76,
        "temp_max": 22.76,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1020,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 0.52, "deg": 9, "gust": 0.84 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-07 09:00:00"
    },
    {
      "dt": 1665144000,
      "main": {
        "temp": 25.63,
        "feels_like": 25.37,
        "temp_min": 25.63,
        "temp_max": 25.63,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.83, "deg": 212, "gust": 1.38 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-07 12:00:00"
    },
    {
      "dt": 1665154800,
      "main": {
        "temp": 23.99,
        "feels_like": 23.8,
        "temp_min": 23.99,
        "temp_max": 23.99,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1018,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 2.93, "deg": 234, "gust": 2.27 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-07 15:00:00"
    },
    {
      "dt": 1665165600,
      "main": {
        "temp": 20.57,
        "feels_like": 20.43,
        "temp_min": 20.57,
        "temp_max": 20.57,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1018,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.53, "deg": 247, "gust": 2.48 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-07 18:00:00"
    },
    {
      "dt": 1665176400,
      "main": {
        "temp": 19.53,
        "feels_like": 19.39,
        "temp_min": 19.53,
        "temp_max": 19.53,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1018,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 0.23, "deg": 269, "gust": 0.54 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-07 21:00:00"
    },
    {
      "dt": 1665187200,
      "main": {
        "temp": 18.67,
        "feels_like": 18.52,
        "temp_min": 18.67,
        "temp_max": 18.67,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1017,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 0.58, "deg": 355, "gust": 0.61 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-08 00:00:00"
    },
    {
      "dt": 1665198000,
      "main": {
        "temp": 17.77,
        "feels_like": 17.61,
        "temp_min": 17.77,
        "temp_max": 17.77,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 96 },
      "wind": { "speed": 1.25, "deg": 15, "gust": 1.36 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-08 03:00:00"
    },
    {
      "dt": 1665208800,
      "main": {
        "temp": 17.53,
        "feels_like": 17.35,
        "temp_min": 17.53,
        "temp_max": 17.53,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 86 },
      "wind": { "speed": 1.2, "deg": 12, "gust": 1.4 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-08 06:00:00"
    },
    {
      "dt": 1665219600,
      "main": {
        "temp": 22.35,
        "feels_like": 22.08,
        "temp_min": 22.35,
        "temp_max": 22.35,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1017,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 97 },
      "wind": { "speed": 0.67, "deg": 279, "gust": 0.89 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-08 09:00:00"
    },
    {
      "dt": 1665230400,
      "main": {
        "temp": 25.07,
        "feels_like": 24.73,
        "temp_min": 25.07,
        "temp_max": 25.07,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 94 },
      "wind": { "speed": 2.2, "deg": 229, "gust": 1.77 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-08 12:00:00"
    },
    {
      "dt": 1665241200,
      "main": {
        "temp": 23.55,
        "feels_like": 23.19,
        "temp_min": 23.55,
        "temp_max": 23.55,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1015,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": { "all": 23 },
      "wind": { "speed": 3.84, "deg": 241, "gust": 2.99 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-08 15:00:00"
    },
    {
      "dt": 1665252000,
      "main": {
        "temp": 19.6,
        "feels_like": 19.29,
        "temp_min": 19.6,
        "temp_max": 19.6,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": { "all": 43 },
      "wind": { "speed": 1.83, "deg": 253, "gust": 2.94 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-08 18:00:00"
    },
    {
      "dt": 1665262800,
      "main": {
        "temp": 18.55,
        "feels_like": 18.29,
        "temp_min": 18.55,
        "temp_max": 18.55,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": { "all": 48 },
      "wind": { "speed": 0.7, "deg": 334, "gust": 0.88 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-08 21:00:00"
    },
    {
      "dt": 1665273600,
      "main": {
        "temp": 17.38,
        "feels_like": 17.11,
        "temp_min": 17.38,
        "temp_max": 17.38,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": { "all": 28 },
      "wind": { "speed": 1.48, "deg": 12, "gust": 1.53 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-09 00:00:00"
    },
    {
      "dt": 1665284400,
      "main": {
        "temp": 16.51,
        "feels_like": 16.17,
        "temp_min": 16.51,
        "temp_max": 16.51,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": { "all": 45 },
      "wind": { "speed": 1.68, "deg": 16, "gust": 1.83 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-09 03:00:00"
    },
    {
      "dt": 1665295200,
      "main": {
        "temp": 16.41,
        "feels_like": 16.01,
        "temp_min": 16.41,
        "temp_max": 16.41,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": { "all": 35 },
      "wind": { "speed": 1.61, "deg": 34, "gust": 2.16 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-09 06:00:00"
    },
    {
      "dt": 1665306000,
      "main": {
        "temp": 22.14,
        "feels_like": 21.69,
        "temp_min": 22.14,
        "temp_max": 22.14,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": { "all": 7 },
      "wind": { "speed": 0.82, "deg": 114, "gust": 1.36 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-09 09:00:00"
    },
    {
      "dt": 1665316800,
      "main": {
        "temp": 24.52,
        "feels_like": 24.1,
        "temp_min": 24.52,
        "temp_max": 24.52,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": { "all": 48 },
      "wind": { "speed": 2.51, "deg": 223, "gust": 2.39 },
      "visibility": 10000,
      "pop": 0.06,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-09 12:00:00"
    },
    {
      "dt": 1665327600,
      "main": {
        "temp": 22.8,
        "feels_like": 22.47,
        "temp_min": 22.8,
        "temp_max": 22.8,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 3.59, "deg": 238, "gust": 3.17 },
      "visibility": 10000,
      "pop": 0.13,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-09 15:00:00"
    },
    {
      "dt": 1665338400,
      "main": {
        "temp": 19.51,
        "feels_like": 19.24,
        "temp_min": 19.51,
        "temp_max": 19.51,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 96 },
      "wind": { "speed": 0.84, "deg": 259, "gust": 1.65 },
      "visibility": 10000,
      "pop": 0.13,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-09 18:00:00"
    },
    {
      "dt": 1665349200,
      "main": {
        "temp": 18.65,
        "feels_like": 18.35,
        "temp_min": 18.65,
        "temp_max": 18.65,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 82 },
      "wind": { "speed": 0.85, "deg": 18, "gust": 0.96 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-09 21:00:00"
    },
    {
      "dt": 1665360000,
      "main": {
        "temp": 17.99,
        "feels_like": 17.65,
        "temp_min": 17.99,
        "temp_max": 17.99,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 91 },
      "wind": { "speed": 1.19, "deg": 40, "gust": 1.55 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-10 00:00:00"
    },
    {
      "dt": 1665370800,
      "main": {
        "temp": 17.48,
        "feels_like": 17.16,
        "temp_min": 17.48,
        "temp_max": 17.48,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.41, "deg": 34, "gust": 1.92 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-10 03:00:00"
    },
    {
      "dt": 1665381600,
      "main": {
        "temp": 17.55,
        "feels_like": 17.24,
        "temp_min": 17.55,
        "temp_max": 17.55,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1014,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.37, "deg": 22, "gust": 1.93 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-10 06:00:00"
    },
    {
      "dt": 1665392400,
      "main": {
        "temp": 22.16,
        "feels_like": 21.89,
        "temp_min": 22.16,
        "temp_max": 22.16,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 98 },
      "wind": { "speed": 0.6, "deg": 104, "gust": 1.57 },
      "visibility": 10000,
      "pop": 0.02,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-10 09:00:00"
    },
    {
      "dt": 1665403200,
      "main": {
        "temp": 24.9,
        "feels_like": 24.7,
        "temp_min": 24.9,
        "temp_max": 24.9,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1014,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 85 },
      "wind": { "speed": 2.06, "deg": 221, "gust": 1.76 },
      "visibility": 10000,
      "pop": 0.12,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-10 12:00:00"
    },
    {
      "dt": 1665414000,
      "main": {
        "temp": 23.5,
        "feels_like": 23.32,
        "temp_min": 23.5,
        "temp_max": 23.5,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1014,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": { "all": 24 },
      "wind": { "speed": 3.74, "deg": 241, "gust": 2.63 },
      "visibility": 10000,
      "pop": 0.23,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-10 15:00:00"
    },
    {
      "dt": 1665424800,
      "main": {
        "temp": 19.88,
        "feels_like": 19.78,
        "temp_min": 19.88,
        "temp_max": 19.88,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": { "all": 17 },
      "wind": { "speed": 1.92, "deg": 259, "gust": 3.22 },
      "visibility": 10000,
      "pop": 0.35,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-10 18:00:00"
    },
    {
      "dt": 1665435600,
      "main": {
        "temp": 18.98,
        "feels_like": 18.89,
        "temp_min": 18.98,
        "temp_max": 18.98,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": { "all": 4 },
      "wind": { "speed": 0.36, "deg": 303, "gust": 0.56 },
      "visibility": 10000,
      "pop": 0.19,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-10 21:00:00"
    },
    {
      "dt": 1665446400,
      "main": {
        "temp": 17.98,
        "feels_like": 17.9,
        "temp_min": 17.98,
        "temp_max": 17.98,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": { "all": 4 },
      "wind": { "speed": 1.35, "deg": 16, "gust": 1.47 },
      "visibility": 10000,
      "pop": 0.11,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-11 00:00:00"
    },
    {
      "dt": 1665457200,
      "main": {
        "temp": 16.99,
        "feels_like": 16.86,
        "temp_min": 16.99,
        "temp_max": 16.99,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": { "all": 5 },
      "wind": { "speed": 1.93, "deg": 13, "gust": 2.44 },
      "visibility": 10000,
      "pop": 0.15,
      "sys": { "pod": "n" },
      "dt_txt": "2022-10-11 03:00:00"
    },
    {
      "dt": 1665468000,
      "main": {
        "temp": 16.87,
        "feels_like": 16.65,
        "temp_min": 16.87,
        "temp_max": 16.87,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": { "all": 13 },
      "wind": { "speed": 2.03, "deg": 26, "gust": 3.22 },
      "visibility": 10000,
      "pop": 0.05,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-11 06:00:00"
    },
    {
      "dt": 1665478800,
      "main": {
        "temp": 22.06,
        "feels_like": 21.73,
        "temp_min": 22.06,
        "temp_max": 22.06,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.03, "deg": 14, "gust": 1.22 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-11 09:00:00"
    },
    {
      "dt": 1665489600,
      "main": {
        "temp": 24.4,
        "feels_like": 24.12,
        "temp_min": 24.4,
        "temp_max": 24.4,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 1.77, "deg": 214, "gust": 1.34 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-11 12:00:00"
    },
    {
      "dt": 1665500400,
      "main": {
        "temp": 22.37,
        "feels_like": 22.1,
        "temp_min": 22.37,
        "temp_max": 22.37,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1015,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": { "all": 100 },
      "wind": { "speed": 3.2, "deg": 239, "gust": 3.24 },
      "visibility": 10000,
      "pop": 0.13,
      "sys": { "pod": "d" },
      "dt_txt": "2022-10-11 15:00:00"
    }
  ],
  "city": {
    "id": 3169070,
    "name": "Rome",
    "coord": { "lat": 41.8947, "lon": 12.4839 },
    "country": "IT",
    "population": 15000,
    "timezone": 7200,
    "sunrise": 1665033115,
    "sunset": 1665074658
  }
}
```
