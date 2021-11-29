import styles from './styles';
import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default About = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.texto}>
        Esta aplicacion busca resolver el principal problema de nuestro cliente
        Paula cuya necesidad era poder tener a la vista el clima de su locación
        actual y el de otras que pueda llegar a necesitar
      </Text>

      <Text style={styles.titulo}>Instrucciones</Text>

      <Text style={styles.texto}>
        <Text style={styles.subtitulo}>Home: </Text>Cuando se abre la aplicacion
        muestra el clima de la ubicación actual.
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.subtitulo}>Search: </Text>Se utiliza para realizar
        busquedas de zonas deseadas. Al hacer click sobre una te redirige hacia
        la vista correspondiente para mostrar el clima de esa locación.
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.subtitulo}>Favorites: </Text>Muestra las locaciones
        guardadas donde podras acceder al clima de la misma o borrarla.
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.subtitulo}>Menu: </Text>Se encuentran links
        referidos a la aplicación.
      </Text>
    </ScrollView>
  );
};
