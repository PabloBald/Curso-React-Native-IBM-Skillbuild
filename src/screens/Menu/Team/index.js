import styles from './styles';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default Team = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/images/avatar.png')}
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
              source={require('../../../assets/images/avatar.png')}
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
              source={require('../../../assets/images/avatar.png')}
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
              source={require('../../../assets/images/avatar.png')}
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
