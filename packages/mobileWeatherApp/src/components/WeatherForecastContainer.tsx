import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  const ForecastItem = forecastProps => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: '2%',
          alignSelf: 'center',
          alignItems: 'center',
          width: '90%',
          // height: '1%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 10,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
              fontSize: 15
            }}>
            {forecastProps.time}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
              fontSize: 30
            }}>
            {Math.round(forecastProps.mainTemp)}°C
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
              fontSize: 22
            }}>
            {forecastProps.mainWeather}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      name="forecast-container"
      style={{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        marginTop: '2%',
        marginBottom: '10%',
      }}>
      <View style={{marginLeft: 5, flex: 1, flexDirection: 'column'}}>
        {props.forecasts.list.map((forecast, index) =>
          index < 7 ? (
            <ForecastItem
              time={forecast.dt_txt}
              mainTemp={forecast.main.temp}
              mainWeather={forecast.weather[0].main}
            />
          ) : null,
        )}
      </View>
    </View>
  );
};

export default WeatherForecastContainer;
