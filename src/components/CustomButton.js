import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 12,
    borderStyle: 'solid',
    borderColor: '#858585',
    borderWidth: 1,
    height: 50,
  },
  appButtonText: {
    fontSize: 15,
    color: '#858585',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

CustomButton.protoTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomButton;
