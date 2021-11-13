import React from 'react';
import {Text, View} from 'react-native';

const CustomHeader = ({height, fontSize, color, title}) => {
  return (
    <View
      style={{
        height: height,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
      }}>
      <Text style={{fontSize: fontSize, color: color, fontWeight: '500'}}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
