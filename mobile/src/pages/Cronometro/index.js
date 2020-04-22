import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from './../../components/Header'

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
    <>
    <Header />
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
    </>
  );
}
