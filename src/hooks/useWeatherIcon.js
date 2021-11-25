/** Valores posibles
 * @param {String} 01d;02d;03d;04d;09d;10d;11d;13d;50d
 */
const useWeatherIcon = (iconName) => {
    switch (iconName) {
      case '01d': return ({src:require("../assets/images/weatherIcons/01d.png")}); break;
      case '02d': return ({src:require("../assets/images/weatherIcons/02d.png")}); break;
      case '03d': return ({src:require("../assets/images/weatherIcons/03d.png")}); break;
      case '04d': return ({src:require("../assets/images/weatherIcons/04d.png")}); break;
      case '09d': return ({src:require("../assets/images/weatherIcons/09d.png")}); break;
      case '10d': return ({src:require("../assets/images/weatherIcons/10d.png")}); break;
      case '11d': return ({src:require("../assets/images/weatherIcons/11d.png")}); break;
      case '13d': return ({src:require("../assets/images/weatherIcons/13d.png")}); break;
      case '50d': return ({src:require("../assets/images/weatherIcons/50d.png")}); break;
  return weatherIcon;
};
}

export default useWeatherIcon;
