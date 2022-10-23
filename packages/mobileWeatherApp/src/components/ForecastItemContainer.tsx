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
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          maxWidth: '25%',
          marginLeft: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Avenir',
          }}>
          {props.time.toString().slice(0, -3)}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', maxWidth: '50%'}}>
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Avenir',
            fontSize: 35,
          }}>
          {Math.round(props.mainTemp)}°C
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: '25%',
          marginRight: 10,
        }}>
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
          style={{width: 50, height: 50}}
        />
      </View>
    </View>
  );
};
