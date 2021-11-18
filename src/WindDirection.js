//@ts-check
/** 
 * WindDirection
 * Convierte la dirección del viento en grados
 * a punto cardinal.
 * @param {Number} degree
 * @returns {String} cardinalPoint
 */
const WindDirection = degree => {
    switch (true) {
        case degree == 0:                   return "N"   ; break;
        case degree >  0   && degree < 45:  return "NNE" ; break;
        case degree == 45:                  return "NE"  ; break;
        case degree >  45  && degree < 90:  return "ENE" ; break;
        case degree == 90:                  return "E"   ; break;
        case degree >  90  && degree < 135: return "ESE" ; break;
        case degree == 135:                 return "SE"  ; break;
        case degree >  135 && degree < 180: return "SSE" ; break;
        case degree == 180:                 return "S"   ; break;
        case degree >  180 && degree < 225: return "SSO" ; break;
        case degree == 225:                 return "SO"  ; break;
        case degree >  225 && degree < 270: return "OSO" ; break;
        case degree == 270:                 return "O"   ; break;
        case degree >  270 && degree < 315: return "ONO" ; break;
        case degree == 315:                 return "NO"  ; break;
        case degree >  315 && degree < 360: return "NNO" ; break;
        case degree == 360:                 return "N"   ; break;
        default: null;
    }
};

export default WindDirection;
