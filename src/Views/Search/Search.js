import {SC} from './styles';

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {env} from '../../../.rnenv.js';
import storage from '../../data/storage';
import Title from '../../components/Title/Title';

const Search = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    storage
      .load({
        key: 'searchHistory',
        autoSync: true,
        syncInBackground: true,
      })
      .then(data => {
        //console.log(1.1, data);
        setSearchHistory(data);
      })
      .catch(err => {
        console.warn('error');
        console.warn(err.message);
        console.log('El historia sera un array vacio');
      });
  }, [searchHistory]);

  const onChangeSearch = data => {
    //console.log(2, data);
    setSearchLocation(data.description);

    const history = [data.description, ...searchHistory].slice(0, 4);
    storage.save({
      key: 'searchHistory',
      data: history,
    });

    storage.save({
      key: 'currentSearch',
      data: data.description,
    });

    setSearchHistory(history);
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View style={SC.container}>
        <Title text="Find a location" />
        <GooglePlacesAutocomplete
          placeholder="Type a city, country or zip code"
          query={{
            key: env.GOOGLE_API_KEY,
            language: 'es', // language of the results
          }}
          onPress={(data, details = null) => onChangeSearch(data)}
          onFail={error => console.error(error)}
          debounce={1000}
        />
        <Text>{searchLocation}</Text>
        <Text>Divisror bonito</Text>
        <Text>--{searchHistory}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text onPress={() => navigation.navigate('sobreApp')}>
          lenny was here
        </Text>
      </View>
    </ScrollView>
  );
};

export default Search;
