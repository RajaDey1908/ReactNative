import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class HelloWorldApp extends Component {
  state ={
    placeName:"",
    places: []
  }

  placeNameChangeHolder = (val) =>{
    this.setState({
      placeName:val
    });
  };

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim() === ""){
      return; 
    }

    this.setState(prevState => {
      return{
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i)=>(
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <TextInput            
            placeholder="This is Aswome"
            onChangeText={this.placeNameChangeHolder}
            value={this.state.placeName}
            style={styles.placeInput}
          />
          <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler}/>
        </View>     
        <View>
          {placesOutput}
        </View>   
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
  },
  inputContainer:{
    //flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center", 
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }


})