import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  icons: {
    size: 35,
    color: '#858585',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: '20%',
    borderRadius: 15,
  },
  card__title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card__data: {
    flex: 1,
    flexDirection: 'column',
  },
  card__data_top: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card__data_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles;
