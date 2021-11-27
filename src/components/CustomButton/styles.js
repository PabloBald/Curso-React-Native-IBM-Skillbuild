import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 12,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,.5)',
    borderWidth: 1,
    height: 50,
  },
  appButtonText: {
    fontSize: 15,
    color: 'rgba(0,0,0,.5)',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
