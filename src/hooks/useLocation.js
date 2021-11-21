import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';


/**
 * Retorna las coordenadas actuales del usuario.
 * @returns {(hasLocation,initialPosition)}
 */
const useLocation = () => {
  const [initialPosition, setInitialPosition] = useState();
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          setInitialPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
          setHasLocation(true);
        },
        e => console.error(e),
        {enableHighAccuracy: true},
      );
      // }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    hasLocation,
    initialPosition,
  };
};

export default useLocation;
