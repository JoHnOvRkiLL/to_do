import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalList(props){
    return (
			<View style={styles.goalItems}>
				<Pressable
					android_ripple={{color : '#210644'}} 
					onPress={props.onDeleteItem.bind(this, props.id)}
				> 
					<Text style={styles.goalText}>{props.text}</Text>
					</Pressable>
			</View>
		);
};

export default GoalList;

const styles = StyleSheet.create({
	goalItems : {
		marginHorizontal:8,
		marginTop : 20,
    backgroundColor : "#5e0acc",
    borderRadius:5,
  },
  goalText :{
    color :'white',
		padding:12, 
  },
});