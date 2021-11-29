import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import Home from '../Home/Main';

const Stack = createNativeStackNavigator();

export default Favorites = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main2"
        component={Home}
        options={{headerTitle: 'Búsqueda'}}
      />
    </Stack.Navigator>
  );
};
