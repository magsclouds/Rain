import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utilities/WeatherCondition';
import Location from '../components/Location';
import PropTypes from 'prop-types';

const Weather = ({weather, temperature, city, tempMax, tempMin}) => {
    return(
        <View
            style={[
                styles.weather,
                {backgroundColor: weatherConditions[weather].color}
            ]}>
            <Location/>
            <View style={styles.header}>
                <Text style={styles.tempMinMax}>low {tempMin}˚</Text>
                <Text style={styles.tempText}>{temperature}˚C</Text>
                <Text style={styles.tempMinMax}>{tempMax}˚ high</Text>
            </View>
            <View style={styles.header2}>
                <Text style={styles.city}>{city}</Text>
                <MaterialCommunityIcons
                    size={90}
                    name={weatherConditions[weather].icon}
                    color={'#fff'}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
            </View>

        </View>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};

const styles = StyleSheet.create ({
    
    weather:{
        flex: 1,
        //backgroundColor: '#f7b733'
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25
    },
    header2:{
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    body:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 33
    },
    title:{
        fontSize: 60,
        color:'#fff'
    },
    subtitle:{
        fontSize: 24,
        color: '#fff'
    },
    tempText:{
        fontSize: 50,
        color: '#fff'
    },
    tempMinMax:{
        fontSize: 23,
        color: '#fff'
    },
    city:{
        fontSize: 33,
        color: '#fff',
    }

});

export default Weather;