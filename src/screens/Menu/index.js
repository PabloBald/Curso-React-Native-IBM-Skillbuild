import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {About, Login, SignUp, Team, Utilities} from '../index';
import Main from  './Main';

const Stack = createNativeStackNavigator();

export default Menu = () => {
  return (
    /**
     * Stack correspondiente al item Menu
     * Contiene las screens Main, About, Login, SignUp, Team, Utilities
     */
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main"      component={Main}  options={{ headerShown: false }}/>

      <Stack.Screen name="Team"      component={Team}      options={{ title: 'El equipo'     }}/>
      <Stack.Screen name="About"     component={About}     options={{ title: 'Sobre la App'  }}/>
      <Stack.Screen name="Login"     component={Login}     options={{ title: 'Ingresar'      }}/>
      <Stack.Screen name="SignUp"    component={SignUp}    options={{ title: 'Registrarse'   }}/>
      <Stack.Screen name="Utilities" component={Utilities} options={{ title: 'Links útiles'  }}/>
    </Stack.Navigator>
  );
};

