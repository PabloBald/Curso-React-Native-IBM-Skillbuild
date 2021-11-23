import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from './components/NavigationBar';
// import { About, Favorites, Home, Login, Menu, NextForecast, Search, SignUp, Team, Utilities} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar /> 
    </NavigationContainer>
  );
};

export default App;
