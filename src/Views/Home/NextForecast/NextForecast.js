import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NextForecastCard = ({day}) => {
    const [cardDay, setCardDay] = useState('');

    useEffect(() => {
        const date = new Date ();
        const todayDayNumber = date.getDay();

        let dayNumber = todayDayNumber + day;
        dayNumber = dayNumber > 6 ? dayNumber -=7 : dayNumber;
        
        switch (dayNumber) {
            case 0:
                nameOfDay = "Domingo";
              break;
            case 1:
                nameOfDay = "Lunes";
              break;
            case 2:
                nameOfDay = "Martes";
              break;
            case 3:
                nameOfDay = "Miercoles";
              break;
            case 4:
                nameOfDay = "Jueves";
              break;
            case 5:
                nameOfDay = "Viernes";
              break;
            case 6:
                nameOfDay = "Sabado";
        };

        setCardDay (nameOfDay)

    }, [])


    return (
        <View style={styles.cardContainer}>
            <Text style={styles.dayText}>{cardDay}</Text>
            <Image style={styles.weatherIcon}>Icon</Image>
            <Text style={styles.maxTempText}>30.0°</Text>
            <Text style={styles.minTempText}>10.0°</Text>
        </View>
    )
};


const NextForecast = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Next forecast</Text>
            </View>
            <View style={styles.nextForecastCardContainer}>
                <NextForecastCard day='1'/>
                <NextForecastCard day='2'/>
                <NextForecastCard day='3'/>
                <NextForecastCard day='4'/>
                <NextForecastCard day='5'/>
                <NextForecastCard day='6'/>
                <NextForecastCard day='7'/>
            </View>
        </View>
    )
}

export default NextForecast