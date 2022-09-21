import React, {useEffect, useState} from 'react';
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
  Pressable,
} from 'react-native';

const api = {
  key: '8e8a5629885d66a0857172614fc0f5bd',
  baseApiUrl: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    console.log('query: ' + query);
    console.log('weather: ' + weather.main);
  });

  const search = () => {
    fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        console.log('query: ' + query);
        console.log('result: ' + {result});
        setQuery('');
        setWeather(result);
      });
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
    <View style={{flex: 1}}>
      <ImageBackground
        source={setBackground()}
        // resizeMethod="cover"
        style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            // alignSelf: 'center',
            padding: 5,
            marginTop: '20%',
            marginBottom: 10,
            width:
              '80%' /* how much width the element takes up within its parent element */,
            borderColor: 'black',
            borderWidth: 5,
            backgroundColor: 'oldlace',
          }}>
          <TextInput
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChangeText={text => setQuery(text)}
            value={query}
          />
        </View>
        <Pressable
          style={{
            justifyContent: 'center',
            backgroundColor: 'oldlace',
            borderWidth: 5,
          }}
          onPress={() => search()}>
          <Text>GetWeatherInfo!</Text>
        </Pressable>
        {typeof weather.main !== 'undefined' ? (
          <View>
            <View style={{}}>
              <Text style={{}}>
                {weather.name}, {weather.sys.country}
              </Text>
              <Text style={{}}>{dateBuilder(new Date())}</Text>
            </View>
            <View style={{}}>
              <Text style={{}}>{Math.round(weather.main.temp)}°C</Text>
              <Text style={{}}>{weather.weather[0].main}</Text>
            </View>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
}

export default App;
