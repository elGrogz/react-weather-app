import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CarouselContainer from './src/components/CarouselContainer';
import {updateBackgroundUrl, getWeatherData} from './src/utils/appUtils';

const defaultImage = require('./public/default.jpg');

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState({});
  const [forecasts, setForecasts] = useState({});
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(defaultImage);

  const search = async () => {
    setLastSearchedCity(query);
    const weatherData = await getWeatherData(query);
    setWeather(weatherData.currentWeather);
    setForecasts(weatherData.forecastData);
    setQuery('');
  };

  useEffect(() => {
    const backgroundUrl = updateBackgroundUrl(weather);
    console.log('BACKGROUND URL: ', backgroundUrl);
    setBackgroundImageUrl(backgroundUrl);
    console.log('BACKGROUNDIMAGE URL: ', backgroundImageUrl);
  }, [weather, backgroundImageUrl]);

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
              marginTop: '15%',
              marginBottom: 10,
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderColor: 'rgba(255,255,255,0.8)',
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
            <CarouselContainer weather={weather} forecasts={forecasts} />
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;
