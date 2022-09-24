import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TextInput, Pressable, ImageBackground} from 'react-native';

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
    <View style={{flex: 1}}>
      <ImageBackground
        source={setBackground()}
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
        <Pressable
          style={({pressed}) => [
            {
              padding: 10,
              alignSelf: 'center',
              backgroundColor: pressed
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.5)',
              borderColor: 'rgba(255,255,255,0.8)',
              borderWidth: 2,
              borderRadius: 15,
            },
          ]}
          onPress={() => search()}>
          <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.5)'}}>
            Get current weather!
          </Text>
        </Pressable>
        {typeof weather.main !== 'undefined' ? (
          <View
            style={{
              flex: 1,
              width: '100%',
              position: 'absolute',
              top: 0,
              bottom: 0,
              justifyContent: 'center',
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
                  {Math.round(weather.wind.speed)} mph
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
        ) : null}
      </ImageBackground>
    </View>
  );
}

export default App;
