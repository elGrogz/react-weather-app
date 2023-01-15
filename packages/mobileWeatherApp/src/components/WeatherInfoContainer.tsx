import React from 'react';
import {Text, View, Image} from 'react-native';
import {dateBuilder, dayBuilder} from '../utils/appUtils';

const WeatherInfoContainer: React.FC<any> = props => {
  return (
    <View
      name="current-weather-pane"
      style={{
        flex: 1,
        width: '100%',
        // marginTop: '2%',
        paddingTop: '5%',
        alignItems: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.75)',
          borderRadius: 25,
          padding: 10,
        }}>
        <View>
          <Text
            style={{fontSize: 20, fontFamily: 'Avenir', alignSelf: 'center'}}>
            {dayBuilder(new Date())}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontFamily: 'Avenir',
            }}>
            {dateBuilder(new Date())}
          </Text>
          <Text style={{fontSize: 40, fontFamily: 'Avenir'}}>
            {props.weather.name}, {props.weather.sys.country}
          </Text>
        </View>
        <Text style={{fontSize: 100, fontFamily: 'Avenir'}}>
          {Math.round(props.weather.main.temp)}°C
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 40, fontFamily: 'Avenir'}}>
            {props.weather.weather[0].main}
          </Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`,
            }}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 1,
          width: '80%',
          backgroundColor: 'rgba(255,255,255,0.75)',
          borderRadius: 10,
          marginBottom: 5,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.main.feels_like)}°C
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Avenir',
            }}>
            Feels like
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.wind.speed)} m/s
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Avenir',
            }}>
            Wind
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.main.humidity)}%
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Avenir',
            }}>
            Humidity
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoContainer;
