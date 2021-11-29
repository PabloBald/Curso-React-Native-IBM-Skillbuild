//@ts-check
import {env} from '../../.rnenv.js';
const urlBaseCurrent = `http://api.openweathermap.org/data/2.5/weather?appid=${env.OPENWEATHER_KEY}&lang=es&units=metric`;
const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?appid=${env.OPENWEATHER_KEY}&lang=es&units=metric`;

/**
 * getWeather
 *
 */
const getWeather = {
  /**
   * Devuelve el clima de la ciudad correspondiente al `id`.
   * @param {String} id
   * @returns {Promise<JSON>}
   */
  withCityID: async id => {
    try {
      const response = await fetch(`${urlBaseCurrent}&id=${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
  /**
   *
   * @param {string} cityName
   * @param {string} countryCode
   * @returns {Promise<JSON>}
   */
  withCityName: async (cityName, countryCode) => {
    try {
      const response = await fetch(
        `${urlBaseCurrent}&q=${cityName},${countryCode}`,
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
  /**
   * withCoordinates (latitude, longitude)
   * @param {string} latitude,
   * @param {string} longitude
   *
   */
  withCoordinates: async (latitude, longitude) => {
    try {
      const responseBase = await fetch(
        `${urlBaseCurrent}&lat=${latitude}&lon=${longitude}`,
      );
      const resultBase = await responseBase.json();

      const responseOne = await fetch(
        `${urlOneCall}&lat=${latitude}&lon=${longitude}`,
      );
      const resultOne = await responseOne.json();

      return [resultBase, resultOne];
    } catch (error) {
      return error;
    }
  },
};

export default getWeather;
