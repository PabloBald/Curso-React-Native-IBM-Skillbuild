import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default LoginButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
