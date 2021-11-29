import React, {useState, useEffect, useContext} from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomButton from '../../../components/CustomButton';
import Geolocation from 'react-native-geolocation-service';
import getWeather from '../../../api/OpenWeatherMap';
import storage from '../../../data/storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCheckLocationPermissions from '../../../hooks/useCheckLocationPermissions';
import BackgroundImage from '../../../components/BackgroundImage';
import {Avatar} from 'react-native-paper';
import Loading from '../../../components/Loading';
import {favouritesContext} from '../../../context/favouriteContext';
import {unixToDate} from '../../../utils/unixToDate';
import {currentDate} from '../../../utils/currentDate'

const renderItem = ({item}) => {
  return (
    <View style={styles.renderItem}>
      <Image
        style={styles.renderItem__icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          height: '25%',
          width: '25%',
        }}
      />
      <Text style={styles.renderItem__hour}>
        {unixToDate.getHours(item.dt)}
        hs
      </Text>
      <Text style={styles.renderItem__status}>{item.weather[0].description}</Text>
      <Text style={styles.renderItem__temp}>{item.temp.toFixed(1)}º</Text>
    </View>
  );
};

export default Main = ({route, navigation}) => {
  const [favourites, setFavourites] = useContext(favouritesContext);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [permissionStatus] = useCheckLocationPermissions();
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [savedLocation, setSavedLocation] = useState({});

  const searchedLocation = route.params?.searchData;

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
      const position = {
        lat: location.latitude,
        lon: location.longitude,
      };

      if (searchedLocation) {
        position.lat = searchedLocation.latitude;
        position.lon = searchedLocation.longitude;
      }

      const data = await getWeather.withCoordinates(position.lat, position.lon);
      setWeather(data);
    };
    loadWeather();
  }, [location, loading]);

  const handleSaved = () => {
    setSaved(!saved);
    setSavedLocation(weather);
  };

  useEffect(() => {
    if (saved) {
      if (!favourites) {
        console.log('No deberia de entrar aca pero entro');
        storage.save({
          key: 'userFavorites',
          data: [],
        });

        setFavourites([]);
      }

      const newFavorite = {
        id: weather[0].id,
        name: weather[0].name,
        lat: weather[0].coord.lat,
        lon: weather[0].coord.lon,
      };

      const checkDuplicates = favourites.filter(
        fav => fav.id === newFavorite.id,
      );

      if (checkDuplicates.length > 0) {
        console.log('La locacion ya existe');
        return;
      }

      storage.save({
        key: 'userFavorites',
        data: [newFavorite, ...favourites],
      });

      setFavourites([newFavorite, ...favourites]);
    }
  }, [savedLocation]);

  return (
    <>
      {loading && !weather ? (
        <Loading />
      ) : (
        <BackgroundImage>
          <View style={styles.main}>
            <View style={styles.top}>
              <View style={styles.top__current}>
                <View style={{fontSize: responsiveFontSize(1.8)}}>
                  <Text style={styles.top__current__text}>
                    Ubicación actual
                  </Text>
                </View>
                <View>
                  <Text style={styles.top__current__title}>
                    {weather[0].name}
                  </Text>
                </View>
              </View>
              <View style={styles.top__fav__icon}>
                <Icon
                  name={saved ? 'heart' : 'heart-outline'}
                  size={24}
                  color="#FFF"
                  onPress={handleSaved}
                />
                {saved ? <Text styles={{color: '#fff'}}>Guardado!</Text> : null}
              </View>
            </View>
            <View style={[styles.weatherIcon, styles.centered]}>
              <Avatar.Image
                size={80}
                source={{
                  uri: `https://raw.githubusercontent.com/leandromuzzupappa/leandromuzzupappa.github.io/master/assets/images/${weather[0].weather[0].icon.replace(
                    'n',
                    'd',
                  )}.png`,
                }}
                style={{backgroundColor: 'rgba(0,0,0,0)'}}
              />
            </View>
            {/* //TODO: Terminar de acomodar contenido de la tarjeta. */}
            <View style={styles.card}>
              <View style={[styles.card__content]}>
                <View style={[styles.card__top]}>
                  <View style={styles.card__top__currentTemp}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: responsiveFontSize(1.8),
                      }}>
                      Temperatura Actual
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(7.2),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {weather[0].main.temp.toFixed(1)}º
                    </Text>
                  </View>
                  <View style={styles.card__top_maxMin}>
                    <View>
                      <View>
                        <Text
                          style={[
                            styles.card__title,
                            {
                              color: '#fff',
                              fontSize: responsiveFontSize(2),
                            },
                          ]}>
                          Max
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: responsiveFontSize(2.8),
                            fontWeight: 'bold',
                          }}>
                          {weather[0].main.temp_max.toFixed(1)}º
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: responsiveFontSize(2),
                          }}>
                          Min
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: responsiveFontSize(2.8),
                            fontWeight: 'bold',
                          }}>
                          {weather[0].main.temp_min.toFixed(1)}º
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.card__bottom}>
                  <View>
                    <Text style={styles.card__title}>{currentDate()}</Text>
                  </View>
                  <View>
                    <FlatList
                      data={weather[1].hourly.slice(1, 24)}
                      renderItem={renderItem}
                      // keyExtractor={item => item.id}
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
                title="Pronóstico extendido"
                style={{color: '#fff'}}
              />
            </View>
          </View>
        </BackgroundImage>
      )}
    </>
  );
};
