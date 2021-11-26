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

  mainContainer: {
    flex: 1,
  },

  top: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(7.1),
  },

  top__current: {
    marginLeft: '10.25%',
  },

  top__fav__icon: {
    alignItems: 'center',
    marginRight: '3%',
    marginTop: '2%',
    width: 70,
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
    backgroundColor: '#C4C4C4',
    width: '79.48%',
    height: '80.48%',
    marginLeft: '10.25%',
    borderRadius: 16,
    padding: responsiveHeight(1.5),
  },

  card__top: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card__bottom: {flex: 1},
  card__title: {
    color: '#858585',
    marginTop: '6.06%',
    fontSize: responsiveFontSize(1.2),
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
