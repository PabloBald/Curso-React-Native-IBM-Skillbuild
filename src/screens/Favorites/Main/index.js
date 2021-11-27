// import styles from './styles';
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

//TODO: Terminar async del corazon antes de este screen
export default Main = () => {
  const [weather, setWeather] = useState(null);
  const data = [
    {title: 'First Item'},
    {title: 'Second Item'},
    {title: 'Third Item'},
    {title: 'Second Item'},
    {title: 'Third Item'},
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.centered}>
        <View style={styles.card}>
          <View style={styles.card__title}>
            <Text>MORENO --- {item.title}</Text>
          </View>
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
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      <Text>Location Place Holder!</Text>
      <FlatList data={data} renderItem={renderItem} />
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
    // flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    height: '100%',

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
