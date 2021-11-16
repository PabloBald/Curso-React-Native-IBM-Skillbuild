import React from 'react';
import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
  },
  links: {
    flex: 0.1,
    color: '#858585',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  loginContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
export default styles;