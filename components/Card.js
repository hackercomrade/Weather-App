import React, { useState, useEffect } from 'react';
import Header from 'react-native-elements';
//60ec86850452846f4dab02eec22e0816
import axios from 'axios';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function Card(props) {
  const [main, setMain] = useState('');
  const [weather, setWeather] = useState('');
  const [name, setName] = useState('');
  const title = props.title;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=60ec86850452846f4dab02eec22e0816`
      )
      .then((result) => {
        console.log(result.data);
        setMain(result.data.main);
        setWeather(result.data.weather[0]);
        setName(result.data.name);
      });
  }, [title]);
  const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      backgroundColor: 'lightgreen',
      justifyContent: 'space-around',
      margin: 2,
      padding: 5,
      color: 'yellow',
      borderRadius: 10,
      textAlign: 'center',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    iconn: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    icon: {
      height: 100,
      width: 100,
    },
  });
  return (
    <View style={styles.card}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{name}</Text>
      </View>
      <View style={styles.top}>
        <View style={{ paddingLeft: 25, textAlign: 'left' }}>
          <Text>MAX</Text>
          <Text>{main.temp_max}℃</Text>
        </View>
        <View style={{ paddingRight: 25, textAlign: 'right' }}>
          <Text>MIN</Text>
          <Text>{main.temp_min}℃</Text>
        </View>
      </View>
      <View>
        <Text>{weather.main}</Text>
        <View style={styles.iconn}>
          <Image style={styles.icon} source={icon} />
        </View>
        <View>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{main.temp}℃</Text>
      </View>
      </View>
    </View>
  );
}
