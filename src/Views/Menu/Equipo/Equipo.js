import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Equipo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/imgs/Menu/foto.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>CARLOS BIANCUSCO</Text>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            cumque alias dolores nemo aperiam!
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/imgs/Menu/foto.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>CARLOS BIANCUSCO</Text>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            cumque alias dolores nemo aperiam!
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/imgs/Menu/foto.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>CARLOS BIANCUSCO</Text>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            cumque alias dolores nemo aperiam!
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/imgs/Menu/foto.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>CARLOS BIANCUSCO</Text>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            cumque alias dolores nemo aperiam!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Equipo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: '#C4C4C4',
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    marginBottom: 30,
  },
  card__top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
  },
  card__bottom: {
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#858585',
    marginLeft: 10,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#858585',
  },
});
