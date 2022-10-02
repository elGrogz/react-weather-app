import {Text, View} from 'react-native';

const WeatherForecastContainer: React.FC<WeatherResponse> = props => {
  return (
    <View
      name="weather-forecase-pane"
      style={{
        flex: 1,
        width: '100%',
        marginTop: '20%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
      <View style={{marginLeft: 5}} />
    </View>
  );
};

export default WeatherForecastContainer;
