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
        // marginBottom: '10%',
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        {props.forecasts.map((forecast, index) =>
          index < 8 ? (
            <ForecastItem
              key={index}
              time={forecast.dt_txt}
              mainTemp={forecast.main.temp}
              mainWeather={forecast.weather[0].main}
              icon={forecast.weather[0].icon}
            />
          ) : null,
        )}
      </View>
    </View>
  );
};

export default WeatherForecastContainer;
