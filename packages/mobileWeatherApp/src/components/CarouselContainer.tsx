import {useState} from 'react';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherForecastContainer from './WeatherForecastContainer';
import {ScrollView, View} from 'react-native';

const CarouselContainer = props => {
  const [interval, setInterval] = useState<number>(1);
  const [intervals, setIntervals] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // get total items present
    // const totalItems = 2;
    // initialise total intervals
    // setIntervals(Math.ceil(totalItems));
  };

  const getInterval = (offset: number): any => {
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
        contentContainerStyle={{width: '100%'}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onScroll={data => {
          console.log({data});
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
        }}
        pagingEnabled>
        <WeatherInfoContainer weather={props.weather} index={0} />
        <WeatherForecastContainer index={1} />
      </ScrollView>
    </View>
  );
};

export default CarouselContainer;
