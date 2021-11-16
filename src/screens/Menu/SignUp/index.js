import styles from './styles';
import React from 'react';
import LoginButton from '../../../components/LoginButton'; 
import {View, Text, TextInput} from 'react-native';

export default SigUp = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text2}>Sign Up</Text>
        <Text style={styles.text1}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Email*</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={texto => console.log(texto)}
            placeholder="Ingrese su email"
          />
        </View>
        <View>
          <Text style={styles.label}>Contraseña*</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={texto => console.log(texto)}
            placeholder="Ingrese una contraseña"
          />
        </View>
        <View>
          <Text style={styles.label}>Confirme su contraseña*</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={texto => console.log(texto)}
            placeholder="Confirme su contraseña"
          />
        </View>
      </View>

      <View style={styles.loginContainer}>
        <LoginButton style={styles.button} title="Sign Up" />
      </View>
    </View>
  );
};
