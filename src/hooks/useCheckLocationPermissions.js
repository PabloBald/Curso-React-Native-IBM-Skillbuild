import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

const useCheckLocationPermissions = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    const getPermission = async () => {
      try {
        let status;
        if (Platform.OS === 'ios') {
          status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          setPermissionStatus(status);
        }

        if (Platform.OS === 'android') {
          status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
          setPermissionStatus(status);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getPermission();
  }, []);
  // console.log(permissionStatus);
  return {permissionStatus};
};

export default useCheckLocationPermissions;
