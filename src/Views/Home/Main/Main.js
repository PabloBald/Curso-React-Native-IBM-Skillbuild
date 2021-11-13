import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Main = () => {
  const [data, setData] = useState({
    currentTemp: 13.6,
    max: 23.4,
    min: 11.8,
    perHour: [
      {
        hour: 21,
        temp: 13.6,
        weather: 'sunny',
        icon: 'sunny.png',
      },
      {
        hour: 22,
        temp: 14.6,
        weather: 'rainy',
        icon: 'rainy.png',
      },
      {
        hour: 23,
        temp: 15.6,
        weather: 'foggy',
        icon: 'foggy.png',
      },
    ],
  });

  const [faved, setFaved] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <View>
          <View style={{fontSize: 14}}>
            <Text>Current Location</Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 24}}>Berazategui</Text>
          </View>
        </View>
        <View style={styles.top__fav_icon}>
          <Icon
            name={faved ? 'heart' : 'heart-outline'}
            size={24}
            onPress={() => {
              setFaved(!faved);
              if (faved == false) {
                Alert.alert('Climapp', 'Localidad agregada a favoritos!');
              }
            }}
          />
        </View>
      </View>
      <View style={styles.weatherIcon}>
        <Image
          source={require('../../../assets/imgs/Main/WeatherIcon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View style={styles.card__top_currentTemp}>
            <Text style={{color: '#858585', fontSize: 12}}>
              Current temperature
            </Text>
            <Text style={{fontSize: 72, fontWeight: 'bold', color: '#858585'}}>
              {data.currentTemp}º
            </Text>
          </View>
          <View style={styles.card__top_maxMin}>
            <View>
              <View>
                <Text style={{color: '#858585', fontSize: 12}}>Max</Text>
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
        <View style={styles.card__bottom}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 20,
  },
  weatherIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 3,
    backgroundColor: '#C4C4C4',
    width: 310,
    height: 330,
    borderRadius: 16,
    marginHorizontal: 40,
    marginVertical: 50,
  },
  card__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  card__top_currentTemp: {},
});
export default Main;
