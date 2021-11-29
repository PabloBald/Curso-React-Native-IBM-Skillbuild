import {useEffect, useState} from 'react';
import getWeather from '../api/OpenWeatherMap';
/**
 * Retorna el clima de la ciudad en latitude longitude
 * @param {string} latitude
 * @param {string} longitude
 */
const useCurrentCityWeather =  (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState(null);
  const [hasWeather, setHasWeather] = useState(false);

  useEffect(() => {
    loadWeather();
    return ()=>"pepitos weather"
  }, []);

  const loadWeather = async () => {
    // const data = await getWeather.withCityID('3427212'); //TODO:Cambiar por geo
    const data = await getWeather.withCoordinates(latitude, longitude);
    setWeatherData(data);
    setHasWeather(true);
  };

  return [hasWeather, weatherData];
};
export default useCurrentCityWeather;
