import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CarouselContainer from './src/components/CarouselContainer';
import {getWeatherData} from './src/utils/appUtils';
import {exampleForecastResponse} from './exampleForecastApiResponse';
import {exampleWeatherResponse} from './exampleWeatherApiResponse';

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

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState({});
  const [forecasts, setForecasts] = useState({});
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(defaultImage);

  const search = async () => {
    console.log('SEARCHING');
    setLastSearchedCity(query);
    const weatherData = await getWeatherData(query);
    setWeather(weatherData.currentWeather);
    setForecasts(weatherData.forecastData);

    // create dev/mock env response
    // console.log({exampleWeatherResponse});
    // setWeather(exampleWeatherResponse());
    // setForecasts(exampleForecastResponse());
    setQuery('');
  };

  useEffect(() => {
    let backgroundUrl = defaultImage;
    const date = Math.round(Date.now() / 1000);

    if (
      typeof weather.weather !== 'undefined' &&
      typeof weather.sys !== 'undefined'
    ) {
      console.log('weather.weather: ', weather.weather);
      console.log('weather.sys: ', weather.sys);

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
            height: '100%',
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '80%',
              padding: 10,
              marginTop: '15%',
              marginBottom: 10,
              backgroundColor: 'rgba(255,255,255,0.6)',
              borderColor: 'rgba(255,255,255)',
              borderWidth: 2,
              borderRadius: 15,
            }}>
            <TextInput
              className="search-bar"
              placeholder="Search location..."
              onChangeText={text => setQuery(text)}
              value={query}
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.8)',
                fontFamily: 'Avenir',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              alignSelf: 'center',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderColor: 'rgba(255,255,255)',
              borderWidth: 2,
              borderRadius: 15,
            }}
            onPress={search}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.8)',
                fontFamily: 'Avenir',
                fontWeight: '700',
              }}>
              Get current weather!
            </Text>
          </TouchableOpacity>
          {typeof weather.cod === 'string' && weather.cod !== '200' ? (
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

          {typeof weather.main !== 'undefined' &&
          typeof forecasts.list !== 'undefined' ? (
            <CarouselContainer weather={weather} forecasts={forecasts.list} />
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;
