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
