import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CustomHeader = ({height, fontSize, color, title}) => {
  return (
    <View
      style={
        styles.container, {height: height}
      }>
      <Text style={styles.text, {fontSize: fontSize, color: color}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
  },
  text: {
  fontWeight: '500',
  },
});

export default CustomHeader;
