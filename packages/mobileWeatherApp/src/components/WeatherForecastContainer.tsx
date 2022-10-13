import React, {useEffect, useState} from 'react';
import {ProgressViewIOSComponent, Text, View} from 'react-native';

const WeatherForecastContainer = props => {
  const [forecastList, setForecastList] = useState();

  // console.log(props.forecasts);

  // const forecasts = props.forecasts.list.slice(0, 7);

  // useEffect(() => {
  // console.log(props.forecasts.list[0].dt);
  // if (typeof forecastList !== 'undefined') {
  // const forecasts = props.forecasts.list.slice(0, 7);
  // setForecastList(forecasts);
  // console.log(forecastList);
  // }
  // }, [props, forecastList]);

  const randomList: string[] = ['apple', 'banana', 'orange'];

  const ForecastItem = forecast => {
    return (
      <View>
        <Text>{forecast.dt}</Text>
        <Text>{forecast.main.temp}</Text>
        <Text>{forecast.main.weather.main}</Text>
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
      {typeof props.forecasts.list !== 'undefined'
        ? props.forecasts.list.map(
            (forecastItem, index) => (
              // <ForecastItem forecast={forecast} style={{marginLeft: 5}} />;
              console.log(forecastItem), (<Text>Hello {index}</Text>)
              // <ForecastItem forecast={forecastItem} />
            ),
          )
        : null}
      {/* {randomList.map(word => (
        <Text>{word}</Text>
      ))} */}
      {/* {randomList.map(number => (
        <ListItem key={number.toString()} value={number} />
      ))} */}
      {/* {typeof props.forecasts !== 'undefined' ? ( */}
      {/* <View style={{marginLeft: 5}}>
        <Text>{props.forecasts.list[0].dt}</Text>
        <Text>{props.forecasts.list[1].main.temp}</Text>
        <Text>{props.forecasts.list[2].main.temp}</Text>
        <Text>{props.forecasts.list[3].main.temp}</Text>
        <Text>{props.forecasts.list[4].main.temp}</Text>
        <Text>{props.forecasts.list[5].main.temp}</Text>
        <Text>{props.forecasts.list[6].main.temp}</Text>
      </View> */}
      {/* ) : null} */}
    </View>
  );
};

export default WeatherForecastContainer;
