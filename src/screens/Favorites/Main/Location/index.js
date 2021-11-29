import {SC} from './styles';

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import getWeather from '../../../../api/OpenWeatherMap';
import storage from '../../../../data/storage';

const {Actions, Content, Cover} = Card;

const Location = data => {
  const {id, lat, lon, name} = data.data;
  const [weather, setWeather] = useState({});

  // Traemos la data de la api
  useEffect(() => {
    const loadWeather = async () => {
      const data = await getWeather.withCoordinates(lat, lon);
      setWeather(data);
    };
    loadWeather();
  }, []);

  const cardPress = () => {
    const searchData = {
      id: id,
      nombre: name,
      pais: 'AR',
      latitude: lat,
      longitude: lon,
    };

    return data.selectItem(searchData);
  };

  const handleDelete = id => {
    return data.deleteItem(id);
  };

  return (
    <Card style={SC.card} onPress={() => cardPress()}>
      <Card.Title
        title={`${name} - ${weather[0]?.main.temp}º`}
        style={SC.card_title}
      />
      <Content style={SC.card_content}>
        <Paragraph>
          Para hoy se espera: {'\n'}
          Maxima: {weather[0]?.main.temp_max}º -- Minima:{' '}
          {weather[0]?.main.temp_min}ºº
        </Paragraph>
      </Content>
      <Actions>
        <Button
          style={SC.card_actions_button}
          icon="delete"
          mode="contained"
          onPress={() => handleDelete(id)}>
          Borrar
        </Button>
      </Actions>
    </Card>
  );
};

export default Location;
