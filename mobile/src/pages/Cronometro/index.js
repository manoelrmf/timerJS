import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const formatNumber = number => `0${number}`.slice(-2);

  const getRemaining = (time) => {
      const mins = Math.floor(time / 60);
      const secs = time - mins * 60;
      return { mins: formatNumber(mins), secs: formatNumber(secs) };
  }

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(segundos);


  

  function toggle (){
    setIsActive(!isActive);
  }

 function reset(){
    setSegundos(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    } else if (!isActive && segundos !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, segundos]);


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{`${mins}:${secs}`}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={toggle}>
          <Feather name={isActive ? 'pause' : 'play'}  size={50} color="#e02041" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={reset}>
          <Feather name="x"  size={50} color="#e02041" />
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
