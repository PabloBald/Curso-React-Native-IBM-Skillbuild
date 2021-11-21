
import React, {useState} from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/CustomButton';
import useCurrentCityWeather from '../../../hooks/useCurrentCityWeather';
import useLocation from '../../../hooks/useLocation';
import useCheckLocationPermissions from '../../../hooks/useCheckLocationPermissions';

const renderItem = ({item}) => {
  return (
    <View style={styles.renderItem}>
      <Text style={styles.renderItem__hour}>{item.hour}hs</Text>
      <Image style={styles.renderItem__icon} source={item.icon} />
      <Text style={styles.renderItem__temp}>{item.temp}</Text>
    </View>
  );
};

export default Main = ({navigation}) => {
  const [saved, setSaved] = useState(false);
  // const [data, setData] = useState({
  //   currentLocation: 'Berazategui',
  //   currentTemp: 13.6,
  //   max: 23.4,
  //   min: 11.8,
  //   perHour: [
  //     {
  //       id: 1,
  //       hour: 21,
  //       temp: 13.6,
  //       weather: 'sunny',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //     {
  //       id: 2,
  //       hour: 22,
  //       temp: 14.6,
  //       weather: 'rainy',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //     {
  //       id: 3,
  //       hour: 23,
  //       temp: 15.6,
  //       weather: 'foggy',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //     {
  //       id: 4,
  //       hour: 23,
  //       temp: 15.6,
  //       weather: 'foggy',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //     {
  //       id: 5,
  //       hour: 23,
  //       temp: 15.6,
  //       weather: 'foggy',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //     {
  //       id: 6,
  //       hour: 23,
  //       temp: 15.6,
  //       weather: 'foggy',
  //       icon: require('../../../assets/images/weatherIcons/sunny.png'),
  //     },
  //   ],
  // });
  // const [data, setData] = useState(null);
  const handleSaved = () => {
    setSaved(!saved);
  };

  let data ={
    "coord": {
      "lon": -59.0286,
      "lat": -34.0981
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 18.52,
      "feels_like": 18.78,
      "temp_min": 16.79,
      "temp_max": 20.57,
      "pressure": 1015,
      "humidity": 90,
      "sea_level": 1015,
      "grnd_level": 1011
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.89,
      "deg": 101,
      "gust": 8.54
    },
    "clouds": {
      "all": 1
    },
    "dt": 1637381361,
    "sys": {
      "type": 2,
      "id": 2021774,
      "country": "AR",
      "sunrise": 1637397674,
      "sunset": 1637448162
    },
    "timezone": -10800,
    "id": 3427213,
    "name": "Zárate",
    "cod": 200
  }

  const [hasLocation, initialPosition] = useLocation();
  const [hasWeather, weatherData] = useCurrentCityWeather('-34.54', '-58.71');
  const [permissionStatus] = useCheckLocationPermissions();


  if (false) return <></>;
  else
    return (
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <View>
            <View style={{fontSize: 14}}>
              <Text>Current Location</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>
                {data.name}
              </Text>
            </View>
          </View>
          <View style={styles.top__fav_icon}>
            <Icon
              name={saved ? 'heart' : 'heart-outline'}
              size={24}
              onPress={handleSaved}
            />
            {saved ? <Text>Saved!</Text> : null}
          </View>
        </View>
        <View style={styles.weatherIcon}>
          <Image
            source={require('../../../assets/images/weatherIcons/sunny.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <View style={styles.card__top}>
            <View style={styles.card__top_currentTemp}>
              <Text style={{color: '#858585', fontSize: 12}}>
                Current temperature
              </Text>
              <Text
                style={{fontSize: 72, fontWeight: 'bold', color: '#858585'}}>
                {data.main.temp}º
              </Text>
            </View>
            <View style={styles.card__top_maxMin}>
              <View>
                <View>
                  <Text style={styles.card__title}>Max</Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#858585',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {data.main.temp_max}
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={{color: '#858585', fontSize: 12}}>Min</Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#858585',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {data.main.temp_min}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card__bottom}>
            <View>
              <Text style={styles.card__title}>Today October 20</Text>
            </View>
            <View>
              <FlatList
                data={data.perHour}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
              />
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={() => navigation.navigate('NextForecast')}
            title="Extendido"
            style={styles.btn}
          />
        </View>
      </View>
    );
};

