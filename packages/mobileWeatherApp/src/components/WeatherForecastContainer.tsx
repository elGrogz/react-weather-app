import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  // if (props.forecasts.list !== 'undefined') {

  // console.log(props.forecasts.list.length);
  // }

  const ForecastItem = forecastProps => {
    return (
      // <View style={{marginBottom: 10}}>
      //   <Text>{forecastProps.time}</Text>
      //   <Text>{forecastProps.mainTemp}</Text>
      //   <Text>{forecastProps.mainWeather}</Text>
      // </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: '2%',
          alignSelf: 'center',
          // position: 'absolute',
          // bottom: 1,
          width: '90%',
          height: '5%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 10,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
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
            }}>
            {Math.round(forecastProps.mainTemp)}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            {forecastProps.mainWeather}
          </Text>
        </View>
      </View>
    );
  };

  // const forecastItems = forecasts.map(forecast => {
  //   <ForecastItem forecast={forecast} style={{marginLeft: 5}} />;
  // });

  return (
    <View
      className="forecast-container"
      style={{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        marginTop: '2%',
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
