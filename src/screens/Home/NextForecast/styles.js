import React from 'react';
import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  text: {
    color: '#858585',
    fontSize: 28,
    fontWeight: 'bold',
  },
  itemListContainer: {
    marginHorizontal: 40,
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayText: {
    flex: 1.3,
    color: '#b3b3b3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  weatherIcon: {
    flex: 1.25,
    width: 40,
    height: 40,
  },
  tempText: {
    flex: 0.7,
    color: '#b3b3b3',
    fontSize: 14,
  },
});
export default styles;