import React from "react";
import {View, Button, TextInput, StyleSheet, Modal } from "react-native";

function GoalInput(props){
  const [enteredGoal, setEnteredGoal] = React.useState('');

  function onInputHandler(enteredText){
    setEnteredGoal(enteredText);
  };

  function onAddHandler(){
    props.onAdd(enteredGoal);
    setEnteredGoal('');
  };

  return(
    <Modal visible={props.showModal} animationType="slide">
      <View style = {styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='e.g. Learn Guitar' 
          onChangeText={onInputHandler} 
          value={enteredGoal}
        />
        <View style = {styles.buttonContainer}>
          <View style={styles.addGoalButtonStyle}>
            <Button 
              title='Add Goal'
              onPress={onAddHandler}
              color='#5e0acc'  
            />
          </View>
          <View style={styles.cancelButton}>
            <Button 
              title='Cancel' 
              color='red'
              onPress={props.cancelModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor:'#322C2B',
  },
  textInput : {
    width : '80%',
    marginBottom:10,
    padding: 12,
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor :'#CCCCCC',
    borderRadius : 8,
    backgroundColor:'#e4d0ff',
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent :'space-between',
  },
  addGoalButtonStyle : {
    marginRight :8,
    width:'35%',
  },
  cancelButton:{
    width:'35%',
  },
});