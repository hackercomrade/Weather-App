import React from 'react';
import {View} from 'react-native';
import Appbar from './components/AppBar';
import SearchBar from './components/SearchBar';
/*export default class App extends React.Component{
  render(){
    return(
      <Text>Hello World!!!!!</Text>
    )
  }
}
export default function App() {
  return(
    <Text>Hello World!!!</Text>
  )
}*/
export default function App() {
  return(
    <View>
      <Appbar/>
      <SearchBar/>
    </View>
  )
}