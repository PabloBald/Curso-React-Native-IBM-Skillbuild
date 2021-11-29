import {ImageBackground} from 'react-native';
import {SC} from './styles';
import React, {useState, useEffect} from 'react';

// Backgrounds
/* 
  night       -- 06 img || 20 t 06
  dusk        -- 05 img || 18 t 19.59
  evening     -- 04 img || 16 t 17.59
  afternoon   -- 02 img || 12 t 15.59
  lateMorning -- 10 img || 10 t 11.59
  morning     -- 01 img || 06 t 11.59
*/
import backgroundAfternoon from '../../assets/images/background/solar-gradients-03.jpg';
import backgroundDusk from '../../assets/images/background/solar-gradients-05.jpg';
import backgroundEvening from '../../assets/images/background/solar-gradients-04.jpg';
import backgroundLateMorning from '../../assets/images/background/solar-gradients-02.jpg';
import backgroundMorning from '../../assets/images/background/solar-gradients-01.jpg';
import backgroundNight from '../../assets/images/background/solar-gradients-06.jpg';

const BackgroundImage = props => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 10) {
      setBackground(backgroundMorning);
    } else if (hours >= 10 && hours < 12) {
      setBackground(backgroundLateMorning);
    } else if (hours >= 12 && hours < 16) {
      setBackground(backgroundAfternoon);
    } else if (hours >= 16 && hours < 18) {
      setBackground(backgroundEvening);
    } else if (hours >= 18 && hours < 20) {
      setBackground(backgroundDusk);
    } else if (hours < 6 || hours >= 20) {
      setBackground(backgroundNight);
    }
  }, []);

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={SC.background}>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
