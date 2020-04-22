import React from 'react'
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#242424',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  buttonBack: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e02041'
  }
  
});


export default styles 