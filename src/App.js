import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Menu from './Views/Menu/Menu';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;
