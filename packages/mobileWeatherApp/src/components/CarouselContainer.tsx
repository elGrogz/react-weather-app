import React, {useState} from 'react';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherForecastContainer from './WeatherForecastContainer';
import {ScrollView, View} from 'react-native';

const CarouselContainer = props => {
  return (
    <View style={{width: '100%'}}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: `${100}%`}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        <WeatherInfoContainer weather={props} />
        <WeatherForecastContainer />
      </ScrollView>
    </View>
  );
};

export default CarouselContainer;
