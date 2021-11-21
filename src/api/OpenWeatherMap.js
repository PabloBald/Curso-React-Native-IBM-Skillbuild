//@ts-check
import { env } from "../../.rnenv.js";
const urlBase = `http://api.openweathermap.org/data/2.5/weather?appid=${env.OPENWEATHER_KEY}&units=metric`;

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
      const response = await fetch(`${urlBase}&id=${id}`);
      const result   = await response.json();
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
      const response = await fetch(`${urlBase}&q=${cityName},${countryCode}`);
      const result   = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
  /**
   * withCoordinates (latitude, longitude)
   * @param {string} latitude,
   * @param {string} longitude
   * @returns {Promise<JSON>}
   */
  withCoordinates: async (latitude, longitude) => {
    try {
      const response = await fetch( `${urlBase}&lat=${latitude}&lon=${longitude}`);
      const result   = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  },
};

export default getWeather;
