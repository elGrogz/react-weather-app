import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  // if (props.forecasts.list !== 'undefined') {

  // console.log(props.forecasts.list.length);
  // }

  const ForecastItem = forecastProps => {
    return (
      <View style={{marginBottom: 10}}>
        <Text>{forecastProps.time}</Text>
        <Text>{forecastProps.mainTemp}</Text>
        <Text>{forecastProps.mainWeather}</Text>
      </View>
    );
  };

  // const forecastItems = forecasts.map(forecast => {
  //   <ForecastItem forecast={forecast} style={{marginLeft: 5}} />;
  // });

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        marginTop: '2%',
        paddingTop: '10%',
      }}>
      {/* {props.forecasts.list !== 'undefined' ? ( */}
      <View style={{marginLeft: 5}}>
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
