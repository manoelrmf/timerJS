import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Cronometro() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{"11:00"}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Feather name="play" style={styles.footerIconPlay} size={50} color="#e02041" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginBottom: 80,
    borderWidth: 2,
    borderColor: '#e02041',
  },
  counterText: {
    width: 200,
    fontSize: 40,
    color: '#e02041',
    textAlign: 'center'
  },
  title: {
    color: '#dadada',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 70,
  },
  footerButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e02041',
  },
  footerIconPlay: {
    paddingLeft: 10
  }
});
