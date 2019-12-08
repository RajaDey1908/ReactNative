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
        places: prevState.places.concat({key: Math.random() ,value: placeName})
      }
    })
  }

  placeDeleteHandler = key =>{
    this.setState(prevState => {
      return{
        places: prevState.places.filter(place=>{
          return place.key!==key ;
        })
      }
    })
  }


  render() {    
    return (
      <View style={styles.Container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />           
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler}/>
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