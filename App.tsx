import React, {useState}from 'react';
import {View} from 'react-native';
import {AppBar} from './components/AppVar'
import {Pharmacy} from './components/Pharmacy'

const App = () => {
  return (
    <View>
      <AppBar/>
      <Pharmacy/>
    </View>
    
  );
};
export default App; 
