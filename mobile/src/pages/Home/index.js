import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'
export default function Home() {
 

  useEffect(() => {
    
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cronômetro</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Timer</Text>
      </View>
      
    </View>
  );
}
