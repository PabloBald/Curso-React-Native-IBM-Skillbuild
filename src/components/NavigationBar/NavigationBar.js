import React from 'react';
import {SC} from './style';

import {Text, View} from 'react-native';

const NavigationBar = props => {
  return(
    <View style={SC.container}>
      <Text style={SC.pepitos}>SOY UNA BARRITA SETSI</Text>
    </View>
  )
  };

export default NavigationBar;
