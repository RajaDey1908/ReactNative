import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class HelloWorldApp extends Component {
  state ={
    placeName:''
  }

  placeNameChangeHolder = (val) =>{
    this.setState({
      placeName:val
    });
  };

  

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <TextInput            
            placeholder="This is Aswome"
            onChangeText={this.placeNameChangeHolder}
            value={this.state.placeName}
            style={styles.placeInput}
          />
          <Button title="Add" style={styles.placeButton}/>
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