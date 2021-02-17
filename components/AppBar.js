import React from 'react';
import {Header} from 'react-native-elements';
export default function Appbar(){
  return(
    <Header backgroundColor ={"cyan"} centerComponent = {{
      text : "WeatherApp by Kavin",
      style : {color : "red", fontWeight : "bold"}
    }}/>
  );
}