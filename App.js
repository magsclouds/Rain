import React from 'react';
import Weather from './components/Weather';
//import Location from './components/Location';
import {APIKey} from './utilities/API_Key';

import{
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput,
    View,
    Text,  
}
from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: true,
    temperature: 0,
    tempMax: 0,
    tempMin: 0,
    weatherCondition: null,
    city: null,
    error: null
  };

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: 'Error getting weather'
        });
      }
    ) 
  }

  fetchWeather(lat, lon){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKey}&units=metric`
    )
    .then(res => res.json())
    .then(json =>{
      //console.log(json);
      this.setState({
        temperature: json.main.temp,
        tempMax: json.main.temp_max,
        tempMin: json.main.temp_min,
        weatherCondition: json.weather[0].main,
        city: json.name,
        isLoading: false
      });
    });
  }

  render() {
    const {isLoading, weatherCondition, temperature, city, tempMax, tempMin} = this.state;
    return (
      <View style ={styles.container}>
          {isLoading ? (
            <View style={styles.loading}>
              <Text style={styles.lodaingText}>Rain Dance in Progress</Text>
            </View>
          ):(
            <Weather
              weather={weatherCondition}
              temperature={temperature}
              city={city}
              tempMax={tempMax}
              tempMin={tempMin}
            />
          )}
          <StatusBar barStyle = 'light-content'/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center',
    backgroundColor: '#fff'
  },
  loading:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e1111'
  },
  lodaingText:{
    fontSize: 30,
    color: '#fff'
  }
});

 {/* <ImageBackground
            source={{uri: 'https://res.cloudinary.com/magsclouds/image/upload/v1544803800/max-bender-510413-unsplash.jpg'}}
            style={{resizeMode: 'cover', width:'100%', height:'100%'}}
            > */}
              

              {/* <View style={styles.middle}></View>
              <View style={styles.bottom}></View> */}
            
          {/* </ImageBackground> */}
