// import styles from './styles';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import storage from '../../../data/storage';

const DeleteCardButton = ({action}) => {
  return (
    <TouchableHighlight style={styles.card__delete} onPress={action}>
      <View>
        <Icon name="trash-can-outline" size={40} color="white" />
      </View>
    </TouchableHighlight>
  );
};

//TODO: Terminar async del corazon antes de este screen
export default Main = () => {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    storage
        .load({key: 'userFavorites'})
        .then(ret => setUserFavorites(ret))
        .catch(err => {
          // Creamos el storage como un arr vacio
          storage.save({
            key: 'userFavorites',
            data: []
          })
        });
  }, [userFavorites])

  // const [weather, setWeather] = useState(null);
  const [clicked, setClicked] = useState(false);
  const data = [
    {title: 'First Item'},
    {title: 'Second Item'},
    {title: 'Third Item'},
    {title: 'Second Item'},
    {title: 'Third Item'},
  ];

  const CardData = ({action}) => {
    return (
      <TouchableHighlight onPress={action}>
        <View style={styles.card__data}>
          <View style={styles.card__data_top}>
            <Text>Icono</Text>
            <Text style={{fontSize: 20}}>17º</Text>
          </View>
          <View style={styles.card__data_bottom}>
            <View>
              <Text>Max:</Text>
            </View>
            <View>
              <Text>Min:</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.centered}>
        <View style={styles.card}>
          <View style={styles.card__title}>
            <Text>{item.name}</Text>
          </View>
          {/* <View style={styles.card__data}>
            <View style={styles.card__data_top}>
              <Text>Icono</Text>
              <Text style={{fontSize: 20}}>17º</Text>
            </View>
            <View style={styles.card__data_bottom}>
              <View>
                <Text>Max:</Text>
              </View>
              <View>
                <Text>Min:</Text>
              </View>
            </View>
          </View> */}
          {clicked ? (
            <DeleteCardButton action={() => setClicked(!clicked)} />
          ) : (
            <CardData action={() => { setClicked(!clicked); }} />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      {console.log('Estos son los favoritos del usuario', userFavorites)}
      <Text>Location Place Holder!</Text>
      <FlatList data={userFavorites} renderItem={renderItem} extraData={userFavorites}/>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    minHeight: 100,

    minWidth: '100%',
    borderRadius: 15,
    elevation: 3,
  },
  card__title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card__data: {
    flex: 1,
    flexDirection: 'column',
  },
  card__data_top: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card__data_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card__delete: {
    flex: 0.5,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
