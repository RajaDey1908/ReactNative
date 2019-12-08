import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const ListItem= (props) =>(
    <View>
        <Text style={styles.listItem}>
            {props.placeName}
        </Text>
    </View>
);


const styles = StyleSheet.create({
    listItem:{
      width:"100%",
      padding:10,
      backgroundColor:"#eee",
      marginBottom:5
    } 
  
  });

export default ListItem;