import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
export default function Home() {
  const navigation = useNavigation()

  function navigateToCronometro() {
    navigation.navigate('Cronometro')
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={navigateToCronometro}>
        <Feather name="watch"  size={50} color="#e02041" />
        <Text style={styles.cardTitle}>Cronômetro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Feather name="clock"  size={50} color="#e02041" />
        <Text style={styles.cardTitle}>Timer</Text>
      </TouchableOpacity>
      
    </View>
  );
}
