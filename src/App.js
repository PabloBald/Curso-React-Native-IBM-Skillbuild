import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from './components/NavigationBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();

  return ( 
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;
