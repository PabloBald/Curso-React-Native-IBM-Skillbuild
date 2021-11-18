import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';



const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.prototype = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomButton;