import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import MenuHome from "./MenuHome/MenuHome";
import Equipo from "./Equipo/Equipo";
import SobreApp from "./SobreApp/SobreApp";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";



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

      <Stack.Screen 
        name='login' 
        component={ Login }
        options={{
            title: "Log in"
        }}/>

      <Stack.Screen 
        name='signUp' 
        component={ SignUp }
        options={{
            title: "Sign Up"
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default Menu;