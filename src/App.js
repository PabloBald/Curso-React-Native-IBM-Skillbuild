import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar /> 
      <CustomHeader />
    </NavigationContainer>
  );
};

export default App;
