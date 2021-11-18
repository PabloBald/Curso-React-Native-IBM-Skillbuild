import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

/**
 * Recibe altura?, tamaño de fuente?, color?, título.
 * PARA MÍ VA SOLO TÍTULO
 */
 export default CustomHeader = ({height, fontSize, color, title}) => {
  return (
    <View style={[styles.container, {height: height}]}>
      <Text style={[styles.text, {fontSize: fontSize, color: color}]}>
        {title}
      </Text>
    </View>
  );
};
