import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


import ListItem from '../ListItems/ListItems'

const PlaceList= props =>{

    const placesOutput = props.places.map((place, i)=>(
        <ListItem key={i} placeName={place} onItemPassed={()=>alert('Item Pressed on item' +i)} ></ListItem>
      ))
    return(
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    )
};


const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
    }  
  });

export default PlaceList;