import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    marginBottom: 30,
    elevation: 3,
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
    letterSpacing: 1.5,
    flexDirection: 'column',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#858585',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: '#858585',
    fontStyle: 'italic',
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#858585',
  },
});
export default styles;
