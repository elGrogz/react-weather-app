import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  // const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  // useEffect(() => {
  //   console.log('query: ' + query);
  // });

  const search = () => {
    fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
  };

  const setBackground = () => {
    const coldBackground = require('./public/cold-bg.jpeg');
    const hotBackground = require('./public/warm-bg.jpeg');
    const defaultImage = require('./public/default.jpg');
    const clearDay = require('./public/clear-day.jpg');
    const clearNight = require('./public/clear-night.jpg');
    const cloudyDay = require('./public/cloudy-day.jpg');
    const cloudyNight = require('./public/cloudy-night.jpg');
    const drizzleDay = require('./public/drizzle-day.jpg');
    const rainDay = require('./public/rain-day.jpg');
    const rainNight = require('./public/rain-night.jpg');
    const snowDay = require('./public/snow-day.jpg');
    const snowNight = require('./public/snow-night.jpg');
    const thunderstormDay = require('./public/thunderstorm-day.jpg');
    const thunderstormNight = require('./public/thunderstorm-night.jpg');

    let backgroundUrl = defaultImage;

    const date = Math.round(Date.now() / 1000);
    console.log('DATE: ' + date);
    // console.log('weather DATE: ' + weather.sys.sunset);

    if (
      typeof weather.weather !== 'undefined' &&
      typeof weather.sys !== 'undefined'
    ) {
      switch (true) {
        case weather.weather[0].main === 'Clear' && date > weather.sys.sunset: {
          console.log('DARK CLEAR');
          backgroundUrl = clearNight;
          break;
        }
        case weather.weather[0].main === 'Clear': {
          backgroundUrl = clearDay;
          break;
        }
        case weather.weather[0].main === 'Clouds' &&
          date > weather.sys.sunset: {
          console.log('DARK CLEAR');
          backgroundUrl = cloudyNight;
          break;
        }
        case weather.weather[0].main === 'Clouds': {
          backgroundUrl = cloudyDay;
          break;
        }
        case weather.weather[0].main === 'Drizzle' &&
          date > weather.sys.sunset: {
          backgroundUrl = rainNight;
          break;
        }
        case weather.weather[0].main === 'Drizzle': {
          backgroundUrl = drizzleDay;
          break;
        }
        case weather.weather[0].main === 'Rain' && date > weather.sys.sunset: {
          backgroundUrl = rainNight;
          break;
        }
        case weather.weather[0].main === 'Rain': {
          backgroundUrl = rainDay;
          break;
        }
        case weather.weather[0].main === 'Snow' && date > weather.sys.sunset: {
          backgroundUrl = snowNight;
          break;
        }
        case weather.weather[0].main === 'Snow': {
          backgroundUrl = snowDay;
          break;
        }
        case weather.weather[0].main === 'Thunderstorm' &&
          date > weather.sys.sunset: {
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

    console.log(backgroundUrl);

    return backgroundUrl;
  };

  const dayBuilder = d => {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];

    return `${day}`;
  };

  const dateBuilder = d => {
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

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={setBackground()}
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            alignSelf: 'center',
            padding: 10,
            marginTop: '20%',
            marginBottom: 10,
            width:
              '80%' /* how much width the element takes up within its parent element */,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.8)',
            borderWidth: 2,
            borderRadius: 15,
          }}>
          <TextInput
            type="text"
            className="search-bar"
            placeholder="Search location..."
            onChangeText={text => setQuery(text)}
            value={query}
            style={{fontSize: 20, color: 'rgba(0,0,0,0.5)'}}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            alignSelf: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.8)',
            borderWidth: 2,
            borderRadius: 15,
          }}
          onPress={search}>
          <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.5)'}}>
            Get current weather!
          </Text>
        </TouchableOpacity>
        {typeof weather.main !== 'undefined' ? (
          <View
            style={{
              flex: 1,
              width: '100%',
              marginTop: '20%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}>
            <View style={{marginLeft: 5}}>
              <View>
                <Text style={{fontSize: 20}}>{dayBuilder(new Date())}</Text>
                <Text style={{marginBottom: 10, fontSize: 20}}>
                  {dateBuilder(new Date())}
                </Text>
                <Text style={{fontSize: 30}}>
                  {weather.name}, {weather.sys.country}
                </Text>
              </View>
              <Text style={{fontSize: 100}}>
                {Math.round(weather.main.temp)}°C
              </Text>
              <Text style={{fontSize: 40}}>{weather.weather[0].main}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 50,
                alignSelf: 'center',
                position: 'absolute',
                bottom: 1,
                width: '80%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 10,
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'rgba(255,255,255,0.8)'}}>
                  {Math.round(weather.main.feels_like)}°C
                </Text>
                <Text style={{fontSize: 18, color: 'rgba(255,255,255,0.8)'}}>
                  Feels like
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'rgba(255,255,255,0.8)'}}>
                  {Math.round(weather.wind.speed)} m/s
                </Text>
                <Text style={{fontSize: 18, color: 'rgba(255,255,255,0.8)'}}>
                  Wind
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'rgba(255,255,255,0.8)'}}>
                  {Math.round(weather.main.humidity)}%
                </Text>
                <Text style={{fontSize: 18, color: 'rgba(255,255,255,0.8)'}}>
                  Humidity
                </Text>
              </View>
            </View>
          </View>
        ) : undefined}
      </ImageBackground>
    </View>
  );
}

export default App;
