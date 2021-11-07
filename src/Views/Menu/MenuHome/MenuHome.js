import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import CustomButtom from '../../../components/CustomButton';

const MenuHome = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text
          style={styles.links}
          onPress={() => navigation.navigate('sobreApp')}>
          - Sobre la App
        </Text>
        <Text
          style={styles.links}
          onPress={() => navigation.navigate('equipo')}>
          - El Equipo
        </Text>
        <Text
          style={styles.links}
          onPress={() => navigation.navigate('sobreApp')}>
          - Links útiles
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <CustomButtom
          onPress={() => navigation.navigate('signUp')}
          title="Sign up"
        />
        <CustomButtom
          onPress={() => navigation.navigate('login')}
          title="Log in"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    flex: 3,
  },
  links: {
    flex: 0.1,
    color: '#858585',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MenuHome;
