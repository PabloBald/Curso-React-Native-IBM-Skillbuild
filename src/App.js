import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from './components/NavigationBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import { About, Favorites, Home, Login, Menu, NextForecast, Search, SignUp, Team, Utilities} from './screens';

const App = () => {
  return ( 
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;
