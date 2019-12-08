import React from 'react';
import { Text, FlatList, StyleSheet} from 'react-native';


import ListItem from '../ListItems/ListItems'

const PlaceList= props =>{

        
    return(
        <FlatList 
        style={styles.listContainer}
        data={props.places}
        renderItem={(info)=>(
            <ListItem 
            placeName={info.item.value} 
            onItemPassed={()=>props.onItemDeleted(info.item.key)} />
        )}
        />
            
    )
};


const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
    }  
  });

export default PlaceList;