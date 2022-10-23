import React from 'react';
import {View, Text, Image} from 'react-native';

export const ForecastItem = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginVertical: '2%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 15,
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'Avenir',
          width: '25%',
        }}>
        {props.time.toString().slice(0, -3)}
      </Text>

      <Text
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'Avenir',
          fontSize: 35,
        }}>
        {Math.round(props.mainTemp)}°C
      </Text>
      <Text
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'Avenir',
          fontSize: 22,
        }}>
        {props.mainWeather}
      </Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`,
        }}
        style={{width: 40, height: 40}}
      />
    </View>
  );
};
