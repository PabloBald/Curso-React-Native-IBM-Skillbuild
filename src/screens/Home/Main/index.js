import React, {useState, useEffect} from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/CustomButton';
import useCurrentCityWeather from '../../../hooks/useCurrentCityWeather';
import useLocation from '../../../hooks/useLocation';
import useCheckLocationPermissions from '../../../hooks/useCheckLocationPermissions';
import Geolocation from 'react-native-geolocation-service';
import getWeather from '../../../api/OpenWeatherMap';

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
  const [loading, setLoading] = useState(true);
  const [permissionStatus] = useCheckLocationPermissions();
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          const currentCoors = {
            latitude: coords.latitude || '0.0',
            longitude: coords.longitude || '0.0',
          };
          setLocation(currentCoors);
        },
        e => console.error(e),
        {enableHighAccuracy: true},
      );
    } catch (e) {
      return (
        <View style={{flex: 1}}>
          <Text>{e.message}</Text>
        </View>
      );
    }
  }, []);

  useEffect(() => {
    if (location && weather?.length > 0) setLoading(false);

    const loadWeather = async () => {
      const data = await getWeather.withCoordinates(
        location.latitude,
        location.longitude,
      );
      setWeather(data);
    };
    loadWeather();
  }, [location, loading]);

  const handleSaved = () => {
    setSaved(!saved);
  };

  return (
    <>
      {console.log('weather main', weather)}
      {loading ? (
        <>
          <Text>Cargando</Text>
        </>
      ) : (
        <>
          <View style={styles.mainContainer}>
            <View style={styles.top}>
              <View>
                <View style={{fontSize: 14}}>
                  <Text>Current Location</Text>
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 24}}>
                    {weather[0].name}
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
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`,
                }}
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
                    style={{
                      fontSize: 72,
                      fontWeight: 'bold',
                      color: '#858585',
                    }}>
                    {weather[0].main.temp}º
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
                        {weather[0].main.temp_max}
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
                        {weather[0].main.temp_min}
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
                    data={weather[0].perHour}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                  />
                </View>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <CustomButton
                onPress={() =>
                  navigation.navigate('NextForecast', {
                    id: 123,
                    weather: weather,
                  })
                }
                title="Extendido"
                style={styles.btn}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};
