import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from '../../Views/Menu/Menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Views/Home/Home';

function Favorites() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Location Place Holder!</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search Place Holder!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const NavigationBar = props => {
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

export default NavigationBar;

const styles = StyleSheet.create({
  icons: {
    size: 35,
    color: '#858585',
  },
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    height: 80,
  },
  labelInactive: {
    fontSize: 13,
    fontWeight: 'normal',
  },
  labelActive: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
