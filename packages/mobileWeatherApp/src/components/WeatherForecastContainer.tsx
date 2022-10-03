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
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default WeatherForecastContainer;
