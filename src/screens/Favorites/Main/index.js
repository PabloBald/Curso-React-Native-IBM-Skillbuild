import {SC} from './styles';

import React, {useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import Location from './Location';
import storage from '../../../data/storage';
import {favouritesContext} from '../../../context/favouriteContext';

const Main = () => {
  const [favourites, setFavourites] = useContext(favouritesContext);

  const handleDelete = id => {
    const userFavoritesUpdated = favourites.filter(fav => fav.id != id);
    storage.save({
      key: 'userFavorites',
      data: userFavoritesUpdated,
    });

    setFavourites(userFavoritesUpdated);
  };

  return (
    <ScrollView style={SC.container}>
      <Text style={SC.title}>Tus favoritos</Text>
      {favourites.length === 0 ? (
        <Text style={SC.no_favourites}>No hay favoritos guardados</Text>
      ) : (
        <FlatList
          data={favourites}
          renderItem={item => (
            <Location data={item.item} deleteItem={id => handleDelete(id)} />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </ScrollView>
  );
};

export default Main;
