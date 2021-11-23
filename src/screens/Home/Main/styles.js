import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  top: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '7.10%',
  },

  top__current: {
    marginLeft: '10.25%',
  },

  top__fav_icon: {
    alignItems: 'center',
    marginRight: '3%',
    marginTop: '2%',
    width: 70,
  },

  weatherIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4.73%',
    maxHeight: '18.72%',
    overflow: 'hidden',
  },

  weatherIcon__icon: {
    width: '100%',
    height: '100%',
  },

  card: {
    flex: 1,
    justifyContent: 'center',
  },

  card__content: {
    backgroundColor: '#C4C4C4',
    width: '79.48%',
    height: '80.48%',
    marginLeft: '10.25%',
    borderRadius: 16,
  },

  card__title: {
    color: '#858585',
    marginTop:'6.06%',
    fontSize: 12,
  },

  card__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 15,
  },

  renderItem: {
    // marginRight: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  renderItem__hour: {
    color: '#858585',
  },
  renderItem__icon: {
    // marginVertical: 5,
  },
  renderItem__temp: {
    color: '#858585',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;
