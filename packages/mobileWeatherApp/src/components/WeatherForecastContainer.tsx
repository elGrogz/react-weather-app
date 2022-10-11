import {useEffect, useState} from 'react';
import {ProgressViewIOSComponent, Text, View} from 'react-native';

const WeatherForecastContainer: React.FC<any> = props => {
  const [forecastList, setForecastList] = useState();

  // console.log(props.forecasts);

  // const forecasts = props.forecasts.list.slice(0, 7);

  useEffect(() => {
    console.log(props.forecasts.list.slice(0, 7));
    // if (typeof forecastList !== 'undefined') {
    const forecasts = props.forecasts.list.slice(0, 7);
    setForecastList(forecasts);
    console.log(forecastList);
    // }
  }, [props, forecastList]);

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
      {typeof forecastList !== 'undefined'
        ? forecastList.map((forecast, index) => {
            // <ForecastItem forecast={forecast} style={{marginLeft: 5}} />;
            <Text>Hello</Text>;
          })
        : null}
      {/* {/* <View style={{marginLeft: 5}}> */}
      {/* <Text>{props}</Text> */}
      {/* <Text>{props.forecast[1].main.temp}</Text>
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
