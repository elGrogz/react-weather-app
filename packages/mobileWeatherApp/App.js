import React, {useState} from 'react';
import type {Node} from 'react';
import Styles from './Styles';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setQuery('');
          setWeather(result);
        });
    }
  };

  const setBackground = () => {
    const coldBackground = require('./public/cold-bg.jpeg');
    const hotBackground = require('./public/warm-bg.jpeg');
    let backgroundUrl = coldBackground;

    typeof weather.main !== 'undefined'
      ? weather.main.temp > 16
        ? (backgroundUrl = hotBackground)
        : (backgroundUrl = coldBackground)
      : (backgroundUrl = coldBackground);
    return backgroundUrl;
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
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <View style={Styles.container}>
      <ImageBackground source={setBackground()} style={Styles.backgroundImage}>
        <View style={Styles.search}>
          <TextInput
            style={Styles.searchBox}
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            value={query}
          />
        </View>
        {/* <Button title="Get weather info!" onPress={search} />
        {typeof weather.main !== 'undefined' ? (
          <View>
            <View className="location-box">
              <Text className="location">
                {weather.name}, {weather.sys.country}
              </Text>
              <Text className="date">{dateBuilder(new Date())}</Text>
            </View>
            <View className="weather-box">
              <Text className="temperature">
                {Math.round(weather.main.temp)}°C
              </Text>
              <Text className="weather">{weather.weather[0].main}</Text>
            </View>
          </View>
        ) : null} */}
      </ImageBackground>
    </View>
  );
}

export default App;
