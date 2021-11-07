import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
<<<<<<< HEAD
import MenuHome from './MenuHome/MenuHome';
import Equipo from './Equipo/Equipo';
import SobreApp from './SobreApp/SobreApp';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
=======
import MenuHome from "./MenuHome/MenuHome";
import Equipo from "./Equipo/Equipo";
import SobreApp from "./SobreApp/SobreApp";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";


>>>>>>> cd9f9cba0a681af59b9d985fb8d9ecabeec93253

const Stack = createNativeStackNavigator();

const Menu = () => {
  return (
    //Menu
    <Stack.Navigator initialRouteName="menu">
      <Stack.Screen
        name="menu"
        component={MenuHome}
        options={{
          title: 'Menu',
          header: () => (
            <CustomHeader height={80} color="#000000" fontSize={20} />
          ),
        }}
      />

      <Stack.Screen
        name="equipo"
        component={Equipo}
        options={{
          title: 'El equipo',
        }}
      />

      <Stack.Screen
        name="sobreApp"
        component={SobreApp}
        options={{
          title: 'Sobre la App',
        }}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Log in',
        }}
      />

<<<<<<< HEAD
      <Stack.Screen
        name="signUp"
        component={SignUp}
=======
      <Stack.Screen 
        name='Signup' 
        component={ Signup }
>>>>>>> cd9f9cba0a681af59b9d985fb8d9ecabeec93253
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
};

export default Menu;
