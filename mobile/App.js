import React from 'react';
import { StyleSheet, View } from 'react-native';
import './src/configs/StatusBarConfig'

import Cronometro from './src/pages/Cronometro'

export default function App() {
  return (
    <View style={styles.container}>
      <Cronometro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  }
});
