import React from 'react';
import {View, Text} from 'react-native';

export const ForecastItem = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginVertical: '2%',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
      }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Avenir',
          }}>
          {props.time.toString().slice(0, -3)}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Avenir',
            fontSize: 30,
          }}>
          {Math.round(props.mainTemp)}°C
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Avenir',
            fontSize: 22,
          }}>
          {props.mainWeather}
        </Text>
      </View>
    </View>
  );
};
