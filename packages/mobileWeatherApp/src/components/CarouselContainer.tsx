import React, {useState} from 'react';
import {Carousel} from 'react-native-snap-carousel';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherForecastContainer from './WeatherForecastContainer';
import {View} from 'react-native';

const CarouselContainer = props => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);

  const getWeatherInfoContainer = () => {
    return <WeatherInfoContainer weather={props} />;
  };

  const getWeatherForecaseContainer = () => {
    return <WeatherForecastContainer weather={props} />;
  };

  const weatherInfoContainer = getWeatherInfoContainer;
  const weatherForecastContainer = getWeatherForecaseContainer;
  const renderItems = [weatherInfoContainer, weatherForecastContainer];

  return (
    <View>
      <Carousel
        layout={'default'}
        // ref={ref => (this.carousel = ref)}
        data={renderItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={(item, index) => renderItems[index]}
        // onSnapToItem={index => this.setState({activeIndex: index})}
      />
    </View>
  );
};

export default CarouselContainer;
