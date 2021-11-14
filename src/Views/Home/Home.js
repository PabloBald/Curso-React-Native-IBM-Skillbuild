import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Main from './Main/Main';
import CustomHeader from '../../components/Header/CustomHeader';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
