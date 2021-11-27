import styles from './styles';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default Team = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={{uri:'https://i.imgur.com/2pcDtrx.png',height:100,width:100}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={styles.title}>Roberto Paez 
          </Text>
          <View>
          <Text style={styles.subtitle}>Scrum Master / Developer</Text>
          </View>
          </View>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
          Roberto se encargo de coordinar al equipo y ayudar a lidiar con las dificultades que iban surgiendo, ademas de la parte del desarrollo realizo tareas de manejo y orden en el repositorio de GitHub.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={{uri:'https://i.imgur.com/9n2gC0z.jpg',height:100,width:100}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={styles.title}>Pablo Baldor 
          </Text>
          <View>
          <Text style={styles.subtitle}>Product Owner / Developer</Text>
          </View>
          </View>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
        Durante el desarrollo del proyecto, ademas del aporte como desarrollador, Pablo fue el encargado de captar los requerimientos del cliente y establecer las tareas para el equipo. Tambien realizó aportes como desarrollador en la estructura del proyecto y las interfaces de usuario.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={{uri:'https://i.imgur.com/YQAnhi0.png',height:100,width:100}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={styles.title}>Leandro Muzzupappa 
          </Text>
          <View>
          <Text style={styles.subtitle}>UX Lead / Developer</Text>
          </View>
          </View>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
            A lo largo del ciclo de desarrollo del proyecto, Leandro fue el encargado de realizar el diseño e implementaciónes de las interfaces de usuario y prototipado en herramientas UX como Figma.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={{uri:'https://i.imgur.com/6pPXImu.png',height:100,width:100}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={styles.title}>Leandro Cappiello 
          </Text>
          <View>
          <Text style={styles.subtitle}>UI/UX Developer</Text>
          </View>
          </View>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
          Leandro fue el encargado de realizar labores de diseño y desarrollo de interfaces de usuario. También estuvo a cargo del prototipado físico del proyecto aportando, las bases para el diseño de la aplicación.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card__top}>
          <View>
            <Image
              style={styles.image}
              source={{uri:'https://i.imgur.com/KhJikum.png',height:100,width:100}}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={styles.title}>Denisse Lemos 
          </Text>
          <View>
          <Text style={styles.subtitle}>CI/CD Developer</Text>
          </View>
          </View>
        </View>
        <View style={styles.card__bottom}>
          <Text style={styles.description}>
          Por su experiencia previa como desarrolladora en React Native, Denisse fue la encargada de facilitar las tareas del equipo aportando rápidas soluciones a problemas conocidos, ayudando a todos los miembros del equipo a tener una primer experiencia de desarrollo mucho más amigable. También fue la encargada del deploy de la aplicacón.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
