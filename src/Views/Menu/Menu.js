import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import MenuHome from "./MenuHome/MenuHome";
import Equipo from "./Equipo/Equipo";
import SobreApp from "./SobreApp/SobreApp";



const Stack = createNativeStackNavigator();

const Menu = ()=>{
  return(

    //Menu
    <NavigationContainer>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen
          name='menu'
          component={ MenuHome }
          options={{ 
            title: "Menu"
          }}
        />

        <Stack.Screen 
        name='equipo' 
        component={ Equipo }
        options={{
            title: "El equipo"
        }}/>

      <Stack.Screen 
        name='sobreApp' 
        component={ SobreApp }
        options={{
            title: "Sobre la App"
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default Menu;