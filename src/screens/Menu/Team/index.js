import styles from './styles';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import TeamCard from './TeamCard';

const TeamData = [
  {
    image: 'https://avatars.githubusercontent.com/u/41562994',
    fullName: 'Roberto Paez',
    position: 'Scrum Master / Developer',
    description:
      'Roberto se encargo de coordinar al equipo y ayudar a lidiar con las dificultades que iban surgiendo, ademas de la parte del desarrollo realizo tareas de manejo y orden en el repositorio de GitHub.',
  },
  {
    image: 'https://i.imgur.com/9n2gC0z.jpg',
    fullName: 'Pablo Baldor',
    position: 'Product Owner / Developer',
    description:
      'Durante el desarrollo del proyecto, ademas del aporte como desarrollador, Pablo fue el encargado de captar los requerimientos del cliente y establecer las tareas para el equipo. Tambien realizó aportes como desarrollador en la estructura del proyecto y las interfaces de usuario.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/48974127',
    fullName: 'Leandro Muzzupappa',
    position: 'UX Lead / Developer',
    description:
      'A lo largo del ciclo de desarrollo del proyecto, Leandro fue el encargado de realizar el diseño e implementaciónes de las interfaces de usuario y prototipado en herramientas UX como Figma.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/83551559',
    fullName: 'Leandro Cappiello',
    position: 'UI/UX Developer',
    description:
      'Leandro fue el encargado de realizar labores de diseño y desarrollo de interfaces de usuario. También estuvo a cargo del prototipado físico del proyecto aportando, las bases para el diseño de la aplicación.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/32619895',
    fullName: 'Denisse Lemos',
    position: 'CI/CD Developer',
    description:
      'Por su experiencia previa como desarrolladora en React Native, Denisse fue la encargada de facilitar las tareas del equipo aportando rápidas soluciones a problemas conocidos, ayudando a todos los miembros del equipo a tener una primer experiencia de desarrollo mucho más amigable. También fue la encargada del deploy de la aplicacón.',
  },
];

export default Team = () => {
  return (
    <ScrollView style={styles.container}>
      {TeamData.map(member => (
        <TeamCard
          key={member.fullName}
          image={member.image}
          fullName={member.fullName}
          position={member.position}
          description={member.description}
        />
      ))}
    </ScrollView>
  );
};
