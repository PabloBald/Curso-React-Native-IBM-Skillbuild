import React, {createContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from './components/NavigationBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import storage from './data/storage';
// import { About,ex Favorites, Home, Login, Menu, NtForecast, Search, SignUp, Team, Utilities} from './screens';
import {favouritesContext} from './context/favouriteContext';

const App = () => {
  LogBox.ignoreAllLogs();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    console.log(1);
    console.log('app js', favourites);
    storage
      .load({key: 'userFavorites'})
      .then(ret => setFavourites(ret))
      .catch(err => {
        storage.save({
          key: 'userFavorites',
          data: [],
        });
        console.log('Entro al catch y se creo el contexto como un array vacio');
      });
  }, [favourites]);

  return (
    <favouritesContext.Provider value={[favourites, setFavourites]}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavigationBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </favouritesContext.Provider>
  );
};

export default App;
