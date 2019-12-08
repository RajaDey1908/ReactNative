import React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';


import ListItem from '../ListItems/ListItems'

const PlaceList= props =>{

    const placesOutput = props.places.map((place, i)=>(
        <ListItem key={i} placeName={place} onItemPassed={()=>props.onItemDeleted(i)} ></ListItem>
      ))
    return(
        <ScrollView style={styles.listContainer}>
            {placesOutput}
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
    }  
  });

export default PlaceList;