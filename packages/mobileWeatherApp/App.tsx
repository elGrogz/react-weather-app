import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import WeatherInfoContainer from './src/components/WeatherInfoContainer';
import {WeatherResponse} from './src/types/WeatherResponse';
import {ErrorResponse} from './src/types/ErrorResponse';
import CarouselContainer from './src/components/CarouselContainer';

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

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState<WeatherResponse | ErrorResponse | {}>(
    {},
  );
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>();

  const search = () => {
    setLastSearchedCity(query);

    fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log({weather});
      });
  };

  useEffect(() => {
    let backgroundUrl = defaultImage;

    const date = Math.round(Date.now() / 1000);
    console.log('DATE: ' + date);

    if (
      typeof weather.weather !== 'undefined' &&
      typeof weather.sys !== 'undefined'
    ) {
      const isNight = date > weather.sys.sunset || date < weather.sys.sunrise;
      console.log('isNight: ' + isNight);
      switch (true) {
        case weather.weather[0].main === 'Clear' && isNight: {
          console.log('DARK CLEAR');
          backgroundUrl = clearNight;
          break;
        }
        case weather.weather[0].main === 'Clear': {
          backgroundUrl = clearDay;
          break;
        }
        case weather.weather[0].main === 'Clouds' && isNight: {
          console.log('DARK CLEAR');
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

    console.log(backgroundUrl);

    setBackgroundImageUrl(backgroundUrl);
  }, [weather]);

  return (
    <View style={{flex: 1, fontFamily: 'Avenir'}}>
      <ImageBackground
        source={backgroundImageUrl}
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            width:
              '100%' /* how much width the element takes up within its parent element */,
            backgroundColor: 'rgba(255,255,255,0.2)',
            height: '100%',
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '80%',
              padding: 10,
              marginTop: '20%',
              marginBottom: 10,
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
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'Avenir',
              }}
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
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'Avenir',
              }}>
              Get current weather!
            </Text>
          </TouchableOpacity>
          {typeof weather.cod === 'string' ? (
            <View
              style={{
                flex: 1,
                marginTop: '10%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 30, color: 'red', fontFamily: 'Avenir'}}>
                Could not find {lastSearchedCity}!
              </Text>
              <Text style={{fontSize: 30, color: 'red', fontFamily: 'Avenir'}}>
                Try again
              </Text>
            </View>
          ) : null}

          {typeof weather.main !== 'undefined' ? (
            // <WeatherInfoContainer weather={weather} />
            <CarouselContainer weather={weather} />
          ) : undefined}
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;
