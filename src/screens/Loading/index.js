import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

export default Loading = () => {
  return (
    <View style={styles.centered}>
      <Text style={styles.text}>{'Cargando'}</Text>
    </View>
  );
};
