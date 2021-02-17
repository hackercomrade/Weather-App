import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View, Button} from 'react-native';
import Card from './Card.js'
export default function SearchBar() {
  const [city, setCity] = useState("")
  const [crc, setCrc] = useState("")
  function cityChange(e) {
    setCity(e.target.value)
  }
  function handleClick(e) {
    setCrc(city)
  }
  const styles = StyleSheet.create({
    input : {
      margin : 20,
      position : "relative"
    },
    textInput : {
      padding : 20,
      margin : 20,
      borderWidth : 4,
      borderColor : "#4CA973" , 
    },
    button : {
      margin : 20,
      marginTop : 5,
    },
  })
  return(
    <View style = {styles.input}>
    <View style = {styles.textInput}>
    <TextInput placeholder = "City Name" onChange = {cityChange}/>
    </View>
    <View style = {styles.button}>
    <Button title = "Search" color = "red" onPress ={handleClick}/>
    </View>
    <Card title = {crc}/>
    </View>
  )
}