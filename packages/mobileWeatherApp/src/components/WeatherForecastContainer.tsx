import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  console.log(props.forecasts.list[0]);

  // const forecasts = props.forecasts.list.slice(0, 7);

  // useEffect(() => {
  // console.log(props.forecasts.list[0].dt);
  // if (typeof forecastList !== 'undefined') {
  // const forecasts = props.forecasts.list.slice(0, 7);
  // setForecastList(forecasts);
  // console.log(forecastList);
  // }
  // }, [props, forecastList]);

  const ForecastItem = forecastProps => {
    console.log(forecastProps.forecastProps.dt);
    return (
      <View>
        <Text>{forecastProps.forecastProps.dt}</Text>
        <Text>{forecastProps.forecastProps.main.temp}</Text>
        <Text>{forecastProps.forecastProps.main.weather[0].main}</Text>
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
          {/* <Text>{props.forecasts.list[0].dt}</Text> */}
          {/* <Text>{props.forecasts.list[1].main.temp}</Text> */}
          {/* <Text>{props.forecasts.list[2].main.temp}</Text>
          <Text>{props.forecasts.list[3].main.temp}</Text>
          <Text>{props.forecasts.list[4].main.temp}</Text>
          <Text>{props.forecasts.list[5].main.temp}</Text>
          <Text>{props.forecasts.list[6].main.temp}</Text>\ */}
          <ForecastItem forecastProps={props.forecasts.list[0]} />
        </View>
      ) : null}
    </View>
  );
};

export default WeatherForecastContainer;
