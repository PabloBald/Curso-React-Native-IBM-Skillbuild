import {StyleSheet} from 'react-native';

export const SC = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 20,
  },
  top__fav_icon: {
    width: 50,
    alignItems: 'center',
  },
  weatherIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 3,
    backgroundColor: '#C4C4C4',
    width: 310,
    height: 330,
    borderRadius: 16,
    marginHorizontal: 40,
    marginVertical: 50,
    paddingHorizontal: 15,
  },
  card__title: {
    color: '#858585',
    fontSize: 12,
  },
  card__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  renderItem: {
    marginRight: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItem__hour: {
    color: '#858585',
  },
  renderItem__icon: {
    marginVertical: 5,
  },
  renderItem__temp: {
    color: '#858585',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
