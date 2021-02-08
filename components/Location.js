import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const Location = () => {
    return(
        <Autocomplete
            placeholder='does it rain in...'
        />
    )

};

//const styles = StyleSheet.create ({
    //location:{

   //// }
//});


export default Location;
