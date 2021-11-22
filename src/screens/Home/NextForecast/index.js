import styles from './styles';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image} from 'react-native';

const NextForecastCard = ({day}) => {
  const [cardDay, setCardDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const todayDayNumber = date.getDay();
    day = parseInt(day);
    let nameOfDay = '';

    let dayNumber = todayDayNumber + day;
    dayNumber = dayNumber > 6 ? (dayNumber -= 7) : dayNumber;

    switch (dayNumber) {
      case 0:
        nameOfDay = 'Domingo';
        break;
      case 1:
        nameOfDay = 'Lunes';
        break;
      case 2:
        nameOfDay = 'Martes';
        break;
      case 3:
        nameOfDay = 'Miércoles';
        break;
      case 4:
        nameOfDay = 'Jueves';
        break;
      case 5:
        nameOfDay = 'Viernes';
        break;
      case 6:
        nameOfDay = 'Sábado';
        break;
    }
    // console.log(nameOfDay);
    setCardDay(nameOfDay);
  }, []);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.dayText}>{cardDay}</Text>
      <Image
        source={require('../../../assets/images/weatherIcons/WeatherIcon.png')}
        resizeMode="contain"
        style={styles.weatherIcon}
      />
      <Text style={styles.tempText}>30.0°</Text>
      <Text style={styles.tempText}>10.0°</Text>
    </View>
  );
};

const NextForecast = ({route}) => {
  const {weather} = route.params;

  console.log('weather nf', route);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pronóstico extendido</Text>
      </View>
      <View style={styles.itemListContainer}>
        <NextForecastCard day="1" key="1" />
        <NextForecastCard day="2" key="2" />
        <NextForecastCard day="3" key="3" />
        <NextForecastCard day="4" key="4" />
        <NextForecastCard day="5" key="5" />
        <NextForecastCard day="6" key="6" />
        <NextForecastCard day="7" key="7" />
      </View>
    </View>
  );
};

export default NextForecast;
