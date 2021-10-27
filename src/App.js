import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <SafeAreaView>
      <NavigationBar />
    </SafeAreaView>
  );
};

export default App;
