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
