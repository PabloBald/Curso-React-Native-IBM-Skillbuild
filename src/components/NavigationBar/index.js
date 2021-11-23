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
          tabBarActiveTintColor: '#444444',
          tabBarInactiveTintColor: '#858585',
          // tabBarLabel: "Inicio",
          tabBarShowLabel: false,
          tabBarLabelStyle: styles.label,
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
        name="Search"
        component={Search}
        options={{
          tabBarLabelStyle: styles.label,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="magnify"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabelStyle: styles.label,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart-outline"
              color={focused ? '#444444' : '#858585'}
              size={focused ? 40 : styles.icons.size}
            />
          ),
          headerStyle: {
            height: 80,
          },
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabelStyle: styles.labelInactive,
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