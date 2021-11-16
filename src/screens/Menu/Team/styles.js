import React from 'react';
import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: '#C4C4C4',
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    marginBottom: 30,
  },
  card__top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
  },
  card__bottom: {
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#858585',
    marginLeft: 10,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#858585',
  },
});
export default styles;