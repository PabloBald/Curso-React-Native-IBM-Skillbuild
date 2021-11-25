import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/CustomButton';
import useCurrentCityWeather from '../../../hooks/useCurrentCityWeather';
import useLocation from '../../../hooks/useLocation';
import useCheckLocationPermissions from '../../../hooks/useCheckLocationPermissions';
import Geolocation from 'react-native-geolocation-service';
import getWeather from '../../../api/OpenWeatherMap';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const renderItem = ({ item }) => {
  return (
    <View style={styles.renderItem}>
      <Text style={styles.renderItem__hour}>{item.hour}hs</Text>
      <Image style={styles.renderItem__icon} source={item.icon} />
      <Text style={styles.renderItem__temp}>{item.temp}</Text>
    </View>
  );
};

export default Main = ({ navigation }) => {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [permissionStatus] = useCheckLocationPermissions();
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          const currentCoors = {
            latitude: coords.latitude || '0.0',
            longitude: coords.longitude || '0.0',
          };
          setLocation(currentCoors);
        },
        e => console.error(e),
        { enableHighAccuracy: true },
      );
    } catch (e) {
      return (
        <View style={{ flex: 1 }}>
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
      {loading && !weather ? (
        <View style={styles.loading__container}>
          <Text style={styles.loading__text}>Cargando</Text>
        </View>
      ) : (
        <>
          <View style={styles.mainContainer}>
            <View style={styles.top}>
              <View style={styles.top__current}>
                <View style={{ fontSize: responsiveFontSize(1.8) }}>
                  <Text>Ubicación actual</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: responsiveFontSize(3.4), }}>
                    {weather[0].name}
                  </Text>
                </View>
              </View>
              <View style={styles.top__fav__icon}>
                <Icon
                  name={saved ? 'heart' : 'heart-outline'}
                  size={24}
                  onPress={handleSaved}
                />
                {saved ? <Text>Guardado!</Text> : null}
              </View>
            </View>
            <View style={[styles.weatherIcon,styles.centered]}>
              <Image
                style={styles.weatherIcon__icon}
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`,
                }}
                resizeMode="contain"
              />
            </View>
            {/* //TODO: Terminar de acomodar contenido de la tarjeta. */}
            <View style={styles.card}>
              <View style={[styles.card__content]}>
                <View style={[styles.card__top]}>
                  <View style={styles.card__top__currentTemp}>
                    <Text style={{ color: '#858585', fontSize: responsiveFontSize(1.8) }}>
                      Temperatura Actual
                    </Text>
                    <Text style={{ fontSize: responsiveFontSize(7.2), fontWeight: 'bold', color: '#858585', }}>
                      {weather[0].main.temp}º
                    </Text>
                  </View>
                  <View style={styles.card__top_maxMin}>
                    <View>
                      <View>
                        <Text style={styles.card__title}>Max</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#858585', fontSize: responsiveFontSize(1.6), fontWeight: 'bold',}}>
                          {weather[0].main.temp_max}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text style={{ color: '#858585', fontSize: responsiveFontSize(1.4), }}>
                          Min
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{ color: '#858585', fontSize: responsiveFontSize(1.6), fontWeight: 'bold' }}>
                          {weather[0].main.temp_min}
                        </Text>
                      </View>
                      {/* //FIXME: Buscar la rua correcta para generar las lista */}
                      <FlatList
                        data={weather[1].daily[0].humidity}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                      />
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
