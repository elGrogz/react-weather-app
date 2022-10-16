export const defaultImage = require('../../public/default.jpg');
const clearDay = require('../../public/clear-day.jpg');
const clearNight = require('../../public/clear-night.jpg');
const cloudyDay = require('../../public/cloudy-day.jpg');
const cloudyNight = require('../../public/cloudy-night.jpg');
const drizzleDay = require('../../public/drizzle-day.jpg');
const rainDay = require('../../public/rain-day.jpg');
const rainNight = require('../../public/rain-night.jpg');
const snowDay = require('../../public/snow-day.jpg');
const snowNight = require('../../public/snow-night.jpg');
const thunderstormDay = require('../../public/thunderstorm-day.jpg');
const thunderstormNight = require('../../public/thunderstorm-night.jpg');

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

export const getWeatherData = query => {
  return (
    Promise.all([
      fetch(
        `${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`,
      ),
      fetch(
        `${api.baseApiUrl}forecast?q=${query}&units=metric&APPID=${api.key}`,
      ),
    ])
      .then(responses =>
        Promise.all(
          responses.map(res => {
            return res.json();
          }),
        ),
      )
      // .then(data => {
      //   return data;
      // })
      .catch()
  );
};

export const updateBackgroundUrl = weather => {
  let backgroundUrl;

  const date = Math.round(Date.now() / 1000);

  if (
    typeof weather.weather !== 'undefined' &&
    typeof weather.sys !== 'undefined'
  ) {
    const isNight = date > weather.sys.sunset || date < weather.sys.sunrise;
    switch (true) {
      case weather.weather[0].main === 'Clear' && isNight: {
        backgroundUrl = clearNight;
        break;
      }
      case weather.weather[0].main === 'Clear': {
        backgroundUrl = clearDay;
        break;
      }
      case weather.weather[0].main === 'Clouds' && isNight: {
        backgroundUrl = cloudyNight;
        break;
      }
      case weather.weather[0].main === 'Clouds': {
        backgroundUrl = cloudyDay;
        break;
      }
      case weather.weather[0].main === 'Drizzle' && isNight: {
        backgroundUrl = rainNight;
        break;
      }
      case weather.weather[0].main === 'Drizzle': {
        backgroundUrl = drizzleDay;
        break;
      }
      case weather.weather[0].main === 'Rain' && isNight: {
        backgroundUrl = rainNight;
        break;
      }
      case weather.weather[0].main === 'Rain': {
        backgroundUrl = rainDay;
        break;
      }
      case weather.weather[0].main === 'Snow' && isNight: {
        backgroundUrl = snowNight;
        break;
      }
      case weather.weather[0].main === 'Snow': {
        backgroundUrl = snowDay;
        break;
      }
      case weather.weather[0].main === 'Thunderstorm' && isNight: {
        backgroundUrl = thunderstormNight;
        break;
      }
      case weather.weather[0].main === 'Thunderstorm': {
        backgroundUrl = thunderstormDay;
        break;
      }
      default: {
        backgroundUrl = defaultImage;
        break;
      }
    }
  }

  return backgroundUrl;
};
