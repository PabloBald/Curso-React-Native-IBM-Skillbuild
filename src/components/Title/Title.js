import {SC} from './styles';

import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Component = ({text}) => {
  return <Text style={SC.title}>{text}</Text>;
};

export default Component;
