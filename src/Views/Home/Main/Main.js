import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Main = () => {
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
          <Icon name="heart-outline" size={24} />
        </View>
      </View>
      <View style={styles.weatherIcon}>
        <Image
          source={require('../../../assets/imgs/Main/WeatherIcon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.card}></View>
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
});
export default Main;
