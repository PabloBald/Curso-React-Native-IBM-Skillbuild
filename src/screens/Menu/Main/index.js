import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
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
            {label: 'Sobre la App', action: 'About'},
            {label: 'Sobre nosotros', action: 'Team'},
          ]}
          renderItem={({item}) => (
            <Text
              style={styles.links}
              onPress={() => navigation.navigate(item.action)}>
              {item.label}
            </Text>
          )}
        />
      </View>
    </View>
  );
};
