import styles from './../styles';

import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

const TeamCard = ({image, fullName, position, description}) => {
  return (
    <View style={styles.card}>
      <View style={styles.card__top}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: image,
              height: 100,
              width: 100,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{marginLeft: '5%'}}>
          <Text style={styles.title}>{fullName}</Text>
          <View>
            <Text style={styles.subtitle}>{position}</Text>
          </View>
        </View>
      </View>
      <View style={styles.card__bottom}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default TeamCard;
