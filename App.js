import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

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
        <TextInput
          style={{ width:300 }}
          placeholder="This is Aswome"
          onChangeText={this.placeNameChangeHolder}
          value={this.state.placeName}
        />
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