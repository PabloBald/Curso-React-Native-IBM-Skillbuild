import React from 'react';
import styles from './styles';
import {View,Text} from 'react-native';
import Lottie from './Lottie';

export default Loading = () => {
  return (
    <View style={styles.centered}>
    <Lottie/>
    <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};
