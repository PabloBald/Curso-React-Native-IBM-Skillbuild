import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, Favorites, Menu} from '../../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default NavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#444444',
        tabBarInactiveTintColor: '#858585',
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Buscar ciudad"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="magnify"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart-outline"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="menu"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
