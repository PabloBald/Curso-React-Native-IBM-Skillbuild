import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/CustomButton';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlatList} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default Main = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <FlatList
          data={[
            {label: 'Sobre la App',   action: 'About'},
            {label: 'Sobre nosotros', action: 'Team'},
            {label: 'Links útiles',   action: 'Utilities'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.links} onPress={() => navigation.navigate(item.action)}>
              {item.label}
            </Text>
          )}
        />
      </View>
      <View style={styles.loginContainer}>
        <FlatList
          data={[
            {label: 'Registrarse', action: 'SignUp'},
            {label: 'Ingresar',    action: 'Login'},
          ]}
          renderItem={({item}) => (
            <CustomButton onPress={() => navigation.navigate(item.action)} title={item.label} />
          )}
        />
      </View>
    </View>
  );
};