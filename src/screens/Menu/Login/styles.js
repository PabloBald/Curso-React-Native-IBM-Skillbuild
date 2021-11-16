import React from 'react';
import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
  },
  text1: {
    color: '#b3b3b3',
    fontSize: 28,
  },
  text2: {
    color: '#858585',
    fontSize: 28,
    fontWeight: 'bold',
  },
  formContainer: {
    marginVertical: 20,
  },
  label: {
    color: '#858585',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#858585',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;