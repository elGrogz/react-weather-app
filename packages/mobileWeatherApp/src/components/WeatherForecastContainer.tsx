import React from 'react';
import {View} from 'react-native';

import {ForecastItem} from './ForecastItemContainer';

const WeatherForecastContainer = props => {
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
