import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
export default function Header() {
  const navigation = useNavigation()

  function navigateToBack() {
    navigation.goBack()
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonBack} onPress={navigateToBack}>
        <Feather name="chevrons-left" size={50} color="#e02041" />
      </TouchableOpacity>
    </View>
  );
}
