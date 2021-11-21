import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

/**
 * 
 * @param {String}
 * @returns {JSX.Element}
 */
 const CustomHeader = ({height, fontSize, color, title}) => {
  return (
    <View style={[styles.container, {height: height}]}>
      <Text style={[styles.text, {fontSize: fontSize, color: color}]}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;