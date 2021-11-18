import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  icons: {
    size: 35,
    color: '#858585',
  },
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    height: 80,
  },
  labelActive: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelInactive: {
    fontSize: 13,
    fontWeight: 'normal',
  },
});
export default styles;