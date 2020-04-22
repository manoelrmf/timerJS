import React from 'react'
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  card: {
    margin: 10,
    height: 150,
    width: 150,
    backgroundColor: 'transparent',
    borderColor: '#e02041',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  cardTitle: {
    paddingTop: 10,
    color: '#e02041',
    fontSize: 20,
  },

  
});


export default styles 