import {SC} from './styles';

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import storage from '../../../data/storage';
import {env} from '../../../../.rnenv.js';

const renderItem = ({item}) => {
  return (
    <View style={SC.renderItem}>
      <Text style={SC.renderItem__hour}>{item.hour}hs</Text>
      <Image style={SC.renderItem__icon} source={item.icon} />
      <Text style={SC.renderItem__temp}>{item.temp}</Text>
    </View>
  );
};

const Main = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [saved, setSaved] = useState(false);
  const [data, setData] = useState({
    currentLocation: 'Berazategui',
    currentTemp: 13.6,
    max: 23.4,
    min: 11.8,
    perHour: [
      {
        id: 1,
        hour: 21,
        temp: 13.6,
        weather: 'sunny',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
      {
        id: 2,
        hour: 22,
        temp: 14.6,
        weather: 'rainy',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
      {
        id: 3,
        hour: 23,
        temp: 15.6,
        weather: 'foggy',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
      {
        id: 4,
        hour: 23,
        temp: 15.6,
        weather: 'foggy',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
      {
        id: 5,
        hour: 23,
        temp: 15.6,
        weather: 'foggy',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
      {
        id: 6,
        hour: 23,
        temp: 15.6,
        weather: 'foggy',
        icon: require('../../../assets/imgs/Main/sunny.png'),
      },
    ],
  });

  useEffect(() => {
    storage
      .load({
        key: 'currentSearch',
        autoSync: true,
        syncInBackground: true,
      })
      .then(data => {
        console.log(1.1, data);
        setCurrentLocation(data);

        console.log(2);
        const stop = false;

        const location = currentLocation.replaceAll(' ', '%20');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${env.OPENWEATHER_KEY}&units=metric`;

        console.log(2.1);
        axios
          .get(url)
          .then(data => console.log(data))
          .catch(err => console.log('err', err));
      })
      .catch(err => {
        console.warn('error');
        console.warn(err.message);
      });
  }, [currentLocation]);

  const handleSaved = () => {
    setSaved(!saved);
  };
  return (
    <View style={SC.mainContainer}>
      <View style={SC.top}>
        <View>
          <View style={{fontSize: 14}}>
            <Text>Current Location</Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 24}}>
              {data.currentLocation}
            </Text>
          </View>
        </View>
        <View style={SC.top__fav_icon}>
          <Icon
            name={saved ? 'heart' : 'heart-outline'}
            size={24}
            onPress={handleSaved}
          />
          {saved ? <Text>Saved!</Text> : null}
        </View>
      </View>
      <View style={SC.weatherIcon}>
        <Image
          source={require('../../../assets/imgs/Main/WeatherIcon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={SC.card}>
        <View style={SC.card__top}>
          <View style={SC.card__top_currentTemp}>
            <Text style={{color: '#858585', fontSize: 12}}>
              Current temperature
            </Text>
            <Text style={{fontSize: 72, fontWeight: 'bold', color: '#858585'}}>
              {data.currentTemp}º
            </Text>
          </View>
          <View style={SC.card__top_maxMin}>
            <View>
              <View>
                <Text style={SC.card__title}>Max</Text>
              </View>
              <View>
                <Text
                  style={{color: '#858585', fontSize: 14, fontWeight: 'bold'}}>
                  {data.max}
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{color: '#858585', fontSize: 12}}>Min</Text>
              </View>
              <View>
                <Text
                  style={{color: '#858585', fontSize: 14, fontWeight: 'bold'}}>
                  {data.min}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={SC.card__bottom}>
          <View>
            <Text style={SC.card__title}>Today October 20</Text>
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
    </View>
  );
};

export default Main;
