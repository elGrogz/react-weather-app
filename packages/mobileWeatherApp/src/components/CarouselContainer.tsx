import React, {useState} from 'react';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherForecastContainer from './WeatherForecastContainer';
import {ScrollView, Text, View} from 'react-native';

const CarouselContainer = props => {
  const [interval, setInterval] = useState<number>(1);
  const [intervals, setIntervals] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  const firstDayOfForecasts = props.forecasts.slice(0, 8);
  const secondDayOfForecasts = props.forecasts.slice(8, 15);

  const init = (width: number) => {
    console.log('INIT FIRED' + intervals);
    // initialise width
    setWidth(width);
    // get total items present
    const totalItems = 3;
    // initialise total intervals
    setIntervals(Math.ceil(totalItems));
    console.log('INIT FIRED: ' + intervals);
  };

  const getInterval = (offset: number): any => {
    console.log('get interval (offset): ' + offset);
    // console.log('get interval (width): ' + width);
    for (let i = 1; i <= intervals; i++) {
      console.log(i);
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          fontSize: 45,
          color: 'white',
          opacity: interval === i ? 1 : 0.4,
        }}>
        &bull; {/* code to make a bullet point */}
      </Text>,
    );
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ScrollView
        horizontal={true}
        onContentSizeChange={(w, h) => init(w)}
        contentContainerStyle={{width: `${100 * intervals}%`}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        style={{
          height: '80%',
        }}
        pagingEnabled>
        <WeatherInfoContainer
          weather={props.weather}
          clearSearch={props.clearSearch}
        />
        <WeatherForecastContainer forecasts={firstDayOfForecasts} />
        <WeatherForecastContainer forecasts={secondDayOfForecasts} />
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: '-4%',
          marginBottom: '8%',
          maxHeight: '5%',
        }}>
        {bullets}
      </View>
    </View>
  );
};

export default CarouselContainer;
