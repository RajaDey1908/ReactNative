import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem= (props) =>(
  <TouchableOpacity>
    <View>
        <Text style={styles.listItem} onPress={props.onItemPassed}>
            {props.placeName}
        </Text>
    </View>
  </TouchableOpacity>
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