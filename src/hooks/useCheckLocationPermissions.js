import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

/**
 * 
 * @returns {string} 'UNAVAILABLE,DENIED,GRANTED,LIMITED,BLOCKED'
 */

const useCheckLocationPermissions = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    getPermission();
    return ()=>"pepitos check"
  }, []);

  const getPermission = async () => {
    try {
      let status;
      if (Platform.OS === 'ios') {
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        setPermissionStatus(status);
        // return status;
      }

      if (Platform.OS === 'android') {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        setPermissionStatus(status);
        // return status;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(permissionStatus);
  return [permissionStatus];
};

export default useCheckLocationPermissions;
