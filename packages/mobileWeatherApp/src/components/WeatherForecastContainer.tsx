import {Text, View} from 'react-native';

const WeatherForecastContainer: React.FC<WeatherResponse> = props => {
  return (
    <View
      name="weather-forecase-pane"
      style={{
        width: '100%',
        flex: 1,
        marginTop: '2%',
        paddingTop: '10%',
      }}>
      <View style={{marginLeft: 5}}>
        <Text>Forecast 1</Text>
        <Text>Forecast 2</Text>
        <Text>Forecast 3</Text>
        <Text>Forecast 4</Text>
        <Text>Forecast 5</Text>
        <Text>Forecast 6</Text>
        <Text>Forecast 7</Text>
      </View>
    </View>
  );
};

export default WeatherForecastContainer;
