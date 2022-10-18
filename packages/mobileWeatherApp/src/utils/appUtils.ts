import {WeatherResponse} from '../types/WeatherResponse';
import {ErrorResponse} from '../types/ErrorResponse';
import {ForecastResponse} from '../types/ForecastResponse';

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

export const getWeatherData = async (query: string) => {
  return new Promise(async (resolve, reject) => {
    const currentWeatherResponse = await fetch(
      `${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`,
    );

    const currentWeather = await currentWeatherResponse.json();

    const forecastDataResponse = await fetch(
      `${api.baseApiUrl}forecast?q=${query}&units=metric&APPID=${api.key}`,
    );
    const forecastData = await forecastDataResponse.json();

    resolve({currentWeather, forecastData});
  });
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

export const dayBuilder = (date: Date): string => {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[date.getDay()];

  return `${day}`;
};

export const dateBuilder = (d: Date): string => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year}`;
};
