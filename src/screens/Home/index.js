import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import Main from './Main';
import { NextForecast } from '..';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main"         component={Main}         options={{headerShown: false, }} />
      <Stack.Screen name="NextForecast" component={NextForecast} options={{headerTitle:'Pronóstico extendido'}} />
    </Stack.Navigator>
  );
};

export default Home;
