import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import NavigationBar from './components/NavigationBar';
import CustomHeader from './components/CustomHeader';
// import { About, Favorites, Home, Login, Menu, NextForecast, Search, SignUp, Team, Utilities} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar /> 
      <CustomHeader />
    </NavigationContainer>
  );
};

export default App;
