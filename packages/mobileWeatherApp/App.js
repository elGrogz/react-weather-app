import React, {useEffect, useState, useRef} from 'react';
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
  Image,
  Pressable,
  Animated,
  ImageBackground,
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
  });

  const search = () => {
    fetch(`${api.baseApiUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        console.log('query: ' + query);
        console.log('result: ' + JSON.stringify(result));
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
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        source={setBackground()}
        // resizeMethod="cover"
        style={{flex: 1, alignItems: 'flex-start'}}>
        <View
          style={{
            alignSelf: 'center',
            padding: 10,
            marginTop: '20%',
            marginBottom: 10,
            width:
              '80%' /* how much width the element takes up within its parent element */,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 2,
            borderRadius: 15,
          }}>
          <TextInput
            type="text"
            className="search-bar"
            placeholder="Search location..."
            onChangeText={text => setQuery(text)}
            value={query}
          />
        </View>
        <Pressable
          style={{
            padding: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 2,
            borderRadius: 15,
          }}
          onPress={() => search()}>
          <Text>Get current weather!</Text>
        </Pressable>
        {typeof weather.main !== 'undefined' ? (
          <View style={{flex: 1, width: '100%'}}>
            <View>
              <View style={{marginTop: 50}}>
                <Text style={{fontSize: 20}}>{dayBuilder(new Date())}</Text>
                <Text style={{marginBottom: 20, fontSize: 20}}>
                  {dateBuilder(new Date())}
                </Text>
                <Text style={{fontSize: 30}}>
                  {weather.name}, {weather.sys.country}
                </Text>
              </View>
              <View style={{}}>
                <Text style={{fontSize: 100}}>
                  {Math.round(weather.main.temp)}°C
                </Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 50,
                alignItems: 'center',
                alignSelf: 'center',
                // justifyContent: 'center',
                position: 'absolute',
                bottom: 1,
                width: '80%',
                borderWidth: 5,
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: 15,
              }}>
              <Text style={{fontSize: 30}}>{weather.weather[0].main}</Text>
            </View>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
}

export default App;
