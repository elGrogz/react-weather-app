import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  // if (props.forecasts.list !== 'undefined') {

  //   console.log(props.forecasts.list[0]);
  // }

  const ForecastItem = props => {
    return (
      <View style={{marginBottom: 10}}>
        <Text>{props.forecast.dt}</Text>
        <Text>{props.forecast.main.temp}</Text>
        <Text>{props.forecast.weather[0].main}</Text>
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
      {props.forecasts.list !== 'undefined' ? (
        <View style={{marginLeft: 5}}>
          {props.forecasts.list.map(forecast => {
            <ForecastItem forecast={forecast} />;
          })}
          {/* <ForecastItem forecastProps={props.forecasts.list[0]} />
          <ForecastItem forecastProps={props.forecasts.list[1]} />
          <ForecastItem forecastProps={props.forecasts.list[2]} />
          <ForecastItem forecastProps={props.forecasts.list[3]} />
          <ForecastItem forecastProps={props.forecasts.list[4]} />
          <ForecastItem forecastProps={props.forecasts.list[5]} />
          <ForecastItem forecastProps={props.forecasts.list[6]} />
          <ForecastItem forecastProps={props.forecasts.list[7]} /> */}
        </View>
      ) : null}
    </View>
  );
};

export default WeatherForecastContainer;
