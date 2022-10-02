import {Text, View} from 'react-native';

const WeatherForecastContainer: React.FC<WeatherResponse> = props => {
  return (
    <View
      name="weather-forecase-pane"
      style={{
        maxWidth: '100%',
        flex: 1,
        marginTop: '20%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
      <View style={{marginLeft: 5}}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default WeatherForecastContainer;
