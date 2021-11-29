import styles from './styles';
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import useWeatherIcon from '../../../hooks/useWeatherIcon';

const NextForecastCard = weekday => {
  const [cardDay, setCardDay] = useState('');
  const [weatherIcon, setWeatherIcon] = useState({});

  useEffect(() => {
    let nameOfDay = '';
    switch (weekday.day) {
      case 'Sun':
        nameOfDay = 'Domingo';
        break;
      case 'Mon':
        nameOfDay = 'Lunes';
        break;
      case 'Tue':
        nameOfDay = 'Martes';
        break;
      case 'Wed':
        nameOfDay = 'Miércoles';
        break;
      case 'Thu':
        nameOfDay = 'Jueves';
        break;
      case 'Fri':
        nameOfDay = 'Viernes';
        break;
      case 'Sat':
        nameOfDay = 'Sábado';
        break;
    }
    setCardDay(nameOfDay);
  }, []);

  useEffect(() => {
    setWeatherIcon(useWeatherIcon(weekday.daily.weather[0].icon));
  }, []);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.dayText}>{cardDay}</Text>
      <Image
        source={weatherIcon.src}
        resizeMode="contain"
        style={styles.weatherIcon}
      />
      <Text style={styles.tempText}>
        Max: {weekday.daily.temp.max.toFixed(1)}°
      </Text>
      <Text style={styles.tempText}>
        Min: {weekday.daily.temp.min.toFixed(1)}°
      </Text>
    </View>
  );
};

const NextForecast = ({route}) => {
  const weather = route.params.weather[1];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemListContainer}>
        <NextForecastCard
          day={String(new Date(weather.daily[1].dt * 1000)).slice(0, 3)}
          key="1"
          daily={weather.daily[1]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[2].dt * 1000)).slice(0, 3)}
          key="2"
          daily={weather.daily[2]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[3].dt * 1000)).slice(0, 3)}
          key="3"
          daily={weather.daily[3]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[4].dt * 1000)).slice(0, 3)}
          key="4"
          daily={weather.daily[4]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[5].dt * 1000)).slice(0, 3)}
          key="5"
          daily={weather.daily[5]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[6].dt * 1000)).slice(0, 3)}
          key="6"
          daily={weather.daily[6]}
        />
        <NextForecastCard
          day={String(new Date(weather.daily[7].dt * 1000)).slice(0, 3)}
          key="7"
          daily={weather.daily[7]}
        />
      </View>
    </View>
  );
};

export default NextForecast;
