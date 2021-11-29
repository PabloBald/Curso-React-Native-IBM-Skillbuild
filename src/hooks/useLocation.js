import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {
  const [initialPosition, setInitialPosition] = useState();
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          const currentCoors = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          setInitialPosition(currentCoors);
          setHasLocation(true);
        },
        e => console.error(e),
        {enableHighAccuracy: true},
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  return [hasLocation, initialPosition];
};

export default useLocation;
