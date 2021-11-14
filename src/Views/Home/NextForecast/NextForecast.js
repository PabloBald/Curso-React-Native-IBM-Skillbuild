import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NextForecastCard = ({day}) => {
    const [cardDay, setCardDay] = useState('');

    useEffect(() => {
        const date = new Date ();
        const todayDayNumber = date.getDay();
        day = parseInt(day);
        let nameOfDay = '';

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
                nameOfDay = "Miércoles";
              break;
            case 4:
                nameOfDay = "Jueves";
              break;
            case 5:
                nameOfDay = "Viernes";
              break;
            case 6:
                nameOfDay = "Sábado";
        };
        console.log(nameOfDay);
        setCardDay (nameOfDay)

    }, [])


    return (
        <View style={styles.itemContainer}>
            <Text style={styles.dayText}>{cardDay}</Text>
            <Image source={require('../../../assets/imgs/Main/WeatherIcon.png')} resizeMode="contain" style={styles.weatherIcon}/>
            <Text style={styles.tempText}>30.0°</Text>
            <Text style={styles.tempText}>10.0°</Text>
        </View>
    )
};


const NextForecast = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Pronóstico extendido</Text>
            </View>
            <View style={styles.itemListContainer}>
                <NextForecastCard day='1' key='1'/>
                <NextForecastCard day='2' key='2'/>
                <NextForecastCard day='3' key='3'/>
                <NextForecastCard day='4' key='4'/>
                <NextForecastCard day='5' key='5'/>
                <NextForecastCard day='6' key='6'/>
                <NextForecastCard day='7' key='7'/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },
    textContainer: {            
      marginHorizontal: 40,
      marginTop: 20,
    },
    text: {
        color: '#858585',
        fontSize: 28,
        fontWeight: 'bold',
    },
    itemListContainer: {
        marginHorizontal: 40,        
        flex: 1
    },
    itemContainer: {
        flex: 1,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

        
    },
    dayText: {
        flex: 1.3,
        color: '#b3b3b3',
        fontSize: 18,
        fontWeight: 'bold',
    },
    weatherIcon: {
      flex: 1.25,
      width: 40,
      height: 40
    },
    tempText: {
        flex: 0.7,
        color: '#b3b3b3',
        fontSize: 14
    }
  });
export default NextForecast