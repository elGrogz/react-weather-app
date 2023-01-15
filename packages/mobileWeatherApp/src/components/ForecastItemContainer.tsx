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
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'Avenir',
          width: '33%',
          textAlign: 'center',
        }}>
        {props.time.toString().slice(0, -3)}
      </Text>

      <Text
        style={{
          fontFamily: 'Avenir',
          fontSize: 35,
          width: '33%',
          textAlign: 'center',
        }}>
        {Math.round(props.mainTemp)}°C
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '33%',
        }}>
        <Text
          style={{
            fontFamily: 'Avenir',
            alignSelf: 'center',
            marginLeft: 'auto',
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
    </View>
  );
};
