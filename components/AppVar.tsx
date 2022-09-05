import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Constant from 'expo-constants';



export const AppBar = () => {
    return (
        <View style={{ backgroundColor: '#009688', paddingTop: Constant.statusBarHeight + 5,
        paddingBottom: 10, paddingLeft: 10, shadowColor:'white',}}>
            <Text style={{ fontWeight: 'bold'}}>
                Inventarios para Farmacias
            </Text>
        </View>
    )
}
const start = StyleSheet.create ({
    container3: {

    }
})

export default AppBar;