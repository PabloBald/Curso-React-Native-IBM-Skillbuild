import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import CustomButtom from '../../../components/CustomButton';

const MenuHome = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
      <FlatList
        data={[
          {label: 'Sobre la App', action: 'sobreApp'},
          {label: 'Sobre nosotros', action:'equipo'},
          {label: 'Links útiles', action: 'sobreApp'},
        ]}
        renderItem={({item}) => <Text
        style={styles.links}
        onPress={() => navigation.navigate(item.action)}>
        {item.label}
      </Text>}
      />
      </View>

      <View style={styles.loginContainer}>
      <FlatList
        data={[
          {label: 'Registrarse', action: 'SignUp'},
          {label: 'Ingresar', action:'login'},
        ]}
        renderItem={({item}) => <CustomButtom
        onPress={() => navigation.navigate(item.action)}
        title={item.label}
      />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
  },
  links: {
    flex: 0.1,
    color: '#858585',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  loginContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default MenuHome;
