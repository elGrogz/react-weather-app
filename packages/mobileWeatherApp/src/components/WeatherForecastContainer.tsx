import {useEffect, useState} from 'react';
import {ProgressViewIOSComponent, Text, View} from 'react-native';

const WeatherForecastContainer: React.FC<WeatherResponse> = props => {
  // const [forecastList, setForecastList] = useState([]);

  // console.log(forecastList);

  const forecasts = props.forecasts;

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
      name="weather-forecase-pane"
      style={{
        width: '100%',
        flex: 1,
        marginTop: '2%',
        paddingTop: '10%',
      }}>
      {forecasts.map((forecast, index) => {
        <ForecastItem
          forecast={forecast}
          key={index}
          style={{marginLeft: 5}}
        />;
      })}
      {/* <View style={{marginLeft: 5}}>
        <Text>{props.forecast[0].main.temp}</Text>
        <Text>{props.forecast[1].main.temp}</Text>
        <Text>{props.forecast[2].main.temp}</Text>
        <Text>{props.forecast[3].main.temp}</Text>
        <Text>{props.forecast[4].main.temp}</Text>
        <Text>{props.forecast[5].main.temp}</Text>
        <Text>{props.forecast[6].main.temp}</Text>
      </View> */}
    </View>
  );
};

export default WeatherForecastContainer;
