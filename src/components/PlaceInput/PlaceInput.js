import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';



class PlaceInput extends Component {
    state ={
        placeName:""
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
    
        this.props.onPlaceAdded(this.state.placeName)
    }

    render(){
        return(
            <View style={styles.inputContainer}>
            <TextInput            
                placeholder="This is Aswome"
                onChangeText={this.placeNameChangeHolder}
                value={this.state.placeName}
                style={styles.placeInput}
            />
            <Button title="Add"
             style={styles.placeButton}
             onPress={(this.placeSubmitHandler)}/>
            </View>  
        )
    }
}

const styles= StyleSheet.create({
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
      },
})

export default PlaceInput;
