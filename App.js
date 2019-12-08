import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class HelloWorldApp extends Component {
  state ={
    places: []
  }


  placeAddedHandler = placeName =>{
    this.setState(prevState => {
      return{
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {    
    return (
      <View style={styles.Container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />           
        <PlaceList places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    padding:26,
    backgroundColor:"#fff",
    justifyContent: "flex-start",
    alignItems: "center", 
    borderWidth: 1 
  }
})