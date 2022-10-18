import {Text, View} from 'react-native';
import {WeatherResponse} from '../types/WeatherResponse';

const WeatherInfoContainer: React.FC<any> = props => {
  const dayBuilder = (date: Date): string => {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[date.getDay()];

    return `${day}`;
  };

  const dateBuilder = (d: Date): string => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };

  return (
    <View
      name="current-weather-pane"
      style={{
        flex: 1,
        width: '100%',
        marginTop: '2%',
        paddingTop: '5%',
      }}>
      <View style={{marginLeft: 5}}>
        <View>
          <Text style={{fontSize: 20, fontFamily: 'Avenir'}}>
            {dayBuilder(new Date())}
          </Text>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 20,
              fontFamily: 'Avenir',
            }}>
            {dateBuilder(new Date())}
          </Text>
          <Text style={{fontSize: 40, fontFamily: 'Avenir'}}>
            {props.weather.name}, {props.weather.sys.country}
          </Text>
        </View>
        <Text style={{fontSize: 100, fontFamily: 'Avenir'}}>
          {Math.round(props.weather.main.temp)}°C
        </Text>
        <Text style={{fontSize: 40, fontFamily: 'Avenir'}}>
          {props.weather.weather[0].main}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: '20%',
          alignSelf: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 1,
          width: '80%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 10,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.main.feels_like)}°C
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            Feels like
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.wind.speed)} m/s
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            Wind
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            {Math.round(props.weather.main.humidity)}%
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Avenir',
            }}>
            Humidity
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoContainer;
