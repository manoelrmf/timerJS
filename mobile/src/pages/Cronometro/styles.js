import React from 'react'
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    height: 250,
    width: 250,
    backgroundColor: 'transparent',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#e02041',
  },
  counterText: {
    width: 200,
    fontSize: 40,
    color: '#e02041',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    color: '#dadada',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  footerButton: {
    margin: 15,
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e02041',
  },
 
});


export default styles