import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from './../../components/Header'


export default function Timer() {
  return (
    <>
    <Header />
    <View style={styles.container}>
     <Text>Timer</Text>
    </View>
    </>
  );
}
