import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flex: 1,
    padding: 16,
  },

  top: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  top__current__text: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },

  top__current__title: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.25),
    color: 'white',
  },

  top__fav__icon: {
    alignItems: 'center',
    marginRight: '3%',
    marginTop: '2%',
    width: 70,
  },

  top__fav__icon__text: {
    color: '#fff',
  },

  weatherIcon: {
    marginTop: '4.73%',
    maxHeight: '18.72%',
    overflow: 'hidden',
  },

  weatherIcon__icon: {
    width: '100%',
    height: '100%',
  },
  //TODO:
  card: {
    flex: 1,
    justifyContent: 'center',
  },

  card__content: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    //padding: responsiveHeight(1.5),
    padding: 16,
  },

  card__top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card__bottom: {flex: 1},
  card__title: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
  },

  renderItem: {
    width: 80,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItem__hour: {
    color: '#fff',
  },
  renderItem__icon: {
    // marginVertical: 5,
  },
  renderItem__temp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
  loading__container: {
    flex: 1,
    backgroundColor: 'green',
  },
  loading__text: {
    fontSize: responsiveFontSize(10),
    color: 'red',
  },
});
export default styles;
