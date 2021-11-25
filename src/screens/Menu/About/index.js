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
        guardadas donde podras acceder al clima de la misma o borrarla haciendo
        swipe hacia la izquierda.
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.subtitulo}>Menu: </Text>Se encuentran links
        referidos a la aplicación y el login o sign up del usuario.
      </Text>

      <Text style={styles.titulo}>Solucion UX</Text>
      <Text style={styles.ultimoTexto}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae
        dolorem rem odit alias architecto perferendis nisi asperiores, dolor
        minus tempore error excepturi nemo soluta voluptas aperiam pariatur
        voluptates. Eum. Commodi sequi temporibus, error id maiores quia
        aspernatur nesciunt nam accusamus repellendus saepe expedita architecto
        earum.
      </Text>
    </ScrollView>
  );
};
