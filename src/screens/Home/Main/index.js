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

export default Main = ({navigation}) => {
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
    const loadWeather = async () => {
      const data = await getWeather.withCoordinates(
        location.latitude,
        location.longitude,
      );
      setWeather(data);
    };
    loadWeather();

    if (location && weather) setLoading(false);
  }, [location]);

  return (
    <>
      {loading ? (
        <Text>Cargando</Text>
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
                    style={{
                      fontSize: 72,
                      fontWeight: 'bold',
                      color: '#858585',
                    }}>
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
        </>
      )}
    </>
  );
};
