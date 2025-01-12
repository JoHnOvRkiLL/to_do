import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = React.useState([]);
  const [isModalVisible , setIsModalVisible] = React.useState(false);

  function startAddingGoal(){
    setIsModalVisible(true);
  };

  function endAddingGoal(){
    setIsModalVisible(false);
  };

  function onAddHandler(enteredGoal){
   setGoalList(prevGoalList => 
    [
      ...prevGoalList,
      {text : enteredGoal, key : Math.random().toString() },
    ]);
    endAddingGoal();
  };

  function deleteGoalHandler(key){
    setGoalList(prevGoalList => {
      return prevGoalList.filter((goal) => goal.key !== key);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddingGoal}/>
      <GoalInput onAdd={onAddHandler} showModal = {isModalVisible} cancelModal={endAddingGoal}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            alwaysBounceVertical = {true}
            data={goalList} 
            renderItem={itemData => {
              return <GoalList
                text={itemData.item.text}
                id = {itemData.item.key}
                onDeleteItem={deleteGoalHandler}/>
            }}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 60,
    paddingHorizontal:16, 
    backgroundColor: '#322C2B',
  },
  goalsContainer : {
    flex : 6 ,
  }
});
