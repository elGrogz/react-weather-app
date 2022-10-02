import {useEffect, useState} from 'react';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherForecastContainer from './WeatherForecastContainer';
import {ScrollView, View} from 'react-native';

const CarouselContainer = props => {
  const [interval, setInterval] = useState<number>(1);
  const [intervals, setIntervals] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    console.log('interval: ' + interval);
  }, [interval]);

  const init = (width: number) => {
    // console.log('INIT FIRED' + intervals);
    // initialise width
    setWidth(width);
    // get total items present
    const totalItems = 2;
    // initialise total intervals
    setIntervals(Math.ceil(totalItems));
    // console.log('INIT FIRED' + intervals);
  };

  const getInterval = (offset: number): any => {
    // console.log('get interval (offset): ' + offset);
    // console.log('get interval (width): ' + width);
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        onContentSizeChange={(w, h) => init(w)}
        contentContainerStyle={{width: `${100 * intervals}%`}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onScroll={data => {
          // console.log({data});
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        style={
          {
            // display: 'flex',
            // flexDirection: 'row',
            // overflow: 'hidden',
          }
        }
        pagingEnabled>
        <WeatherInfoContainer weather={props.weather} />
        <WeatherForecastContainer />
      </ScrollView>
    </View>
  );
};

export default CarouselContainer;
