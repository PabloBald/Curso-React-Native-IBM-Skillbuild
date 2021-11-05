import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../../Views/Menu/Menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Place Holder!</Text>
    </View>
  );
}

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location Place Holder!</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Place Holder!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const NavigationBar = props => {
  return(
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions= {{
        tabBarActiveTintColor: '#444444',
        tabBarInactiveTintColor: '#858585',
        }}
        barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size}/>),
                        
            }} />
      <Tab.Screen name="Search" component={Search} 
        options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Icon name="magnify" color={color} size={size} />
        ),
      }}/>

      <Tab.Screen name="Favorites" component={Favorites}  
      options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-outline" color={color} size={size} />
          )
        }}/>
      
      <Tab.Screen name="Menu" component={Menu} 
       options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color, size }) => (
          <Icon name="menu" color={color} size={size} />
        ),
        headerShown:false,
      }}/>
    </Tab.Navigator>
  )
  };

export default NavigationBar;

function screenOptions(route,color){
  let iconName;

  switch(route.name){
    case "home":
      iconName = "compass-outline"
      break;
      default:
        break;
  }

  return(
    <Icon type="material-community" name={iconName} size={20} color={color}/>
  )
}