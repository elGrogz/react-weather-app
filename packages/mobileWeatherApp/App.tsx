import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import WeatherInfoContainer from './src/components/WeatherInfoContainer';
import {WeatherResponse} from './src/types/WeatherResponse';
import {ErrorResponse} from './src/types/ErrorResponse';
import CarouselContainer from './src/components/CarouselContainer';
import {updateBackgroundUrl, defaultImage} from './src/utils/weatherUtils';

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [weather, setWeather] = useState<any>({});
  const [forecasts, setForecasts] = useState<any>({});
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(
    defaultImage,
  );

  const search = async () => {
    setLastSearchedCity(query);

    fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        // console.log('PRE WEATHER: ', result);
        setWeather(result);
        // console.log('POST WEATHER: ', weather);
      });

    fetch(`${api.baseApiUrl}forecast?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        if (typeof result.list !== undefined) {
          // console.log('PRE FORECAST: ', result);
          setForecasts(result);
          // console.log('POST FORECAST: ', forecasts);
        }
      });

    const backgroundUrl = updateBackgroundUrl(weather);
    setBackgroundImageUrl(backgroundUrl);
    setQuery('');
  };

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

          {typeof weather?.main !== 'undefined' &&
          typeof forecasts !== 'undefined' ? (
            <CarouselContainer weather={weather} forecasts={forecasts} />
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;
