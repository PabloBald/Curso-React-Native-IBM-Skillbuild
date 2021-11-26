import {SC} from './styles';

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import storage from '../../../data/storage';

import {Searchbar, List, Button} from 'react-native-paper';

function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize('NFD') //separa unicode;
    .replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      '$1',
    ); //elimina que no corresponde;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Search = ({navigation}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const aa = async () => {
      const prov = await (
        await fetch('https://apis.datos.gob.ar/georef/api/provincias')
      ).json();
      const loc = await (
        await fetch('https://apis.datos.gob.ar/georef/api/localidades?max=4142')
      ).json();

      setCities([...prov.provincias, ...loc.localidades]);
    };
    aa();
  }, []);

  const onChangeSearch = query => {
    query.length > 0 && setIsSearching(true);

    setSearchQuery(query);

    const filteredCities = cities.filter(city => {
      const cityNormalized = normalizeString(city.nombre);

      if (cityNormalized.indexOf(normalizeString(searchQuery)) > -1) {
        return city;
      } else {
        return '';
      }
    });

    setFilteredCities(filteredCities);
  };

  const handlePressPredictivo = data => {
    console.log(data);

    const searchData = {
      id: data.id,
      nombre: capitalize(data.nombre),
      municipio: data?.municipio.nombre,
      provincia: data?.provincia.nombre,
      pais: 'AR',
      latitude: data.centroide.lat,
      longitude: data.centroide.lon,
    };

    storage.save({
      key: 'lastSearchData',
      data: searchData,
    });

    // Guardando el historial
    const history = [searchData, ...searchHistory].slice(0, 4);
    storage.save({
      key: 'searchHistory',
      data: history,
    });
    setSearchHistory(history);

    navigation.navigate('Main2', {
      searchData,
    });
  };

  return (
    <>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        {isSearching ? (
          <FlatList
            data={filteredCities}
            renderItem={item => (
              <Button onPress={() => handlePressPredictivo(item.item)}>
                {item.item.nombre}
              </Button>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <FlatList
            data={searchHistory}
            renderItem={item => (
              <Button onPress={() => handlePressPredictivo(item.item)}>
                {item.item.nombre}
              </Button>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </>
  );
};

export default Search;
