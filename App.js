import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>My 2025 Goals</Text>
        <View style = {styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='e.g. Learn Guitar'/>
          <Button title='Add Goal'/>
        </View>
        <View style={styles.goalsContainer}>
          <Text>Your 2025 Goals</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16, 
  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems : 'center',
    marginBottom : 20,
    borderBottomWidth: 2,
    borderColor : '#CCCCCC',
  },
  textInput : {
    width : '75%',
    padding: 8,
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor :'#CCCCCC',
    borderRadius : 10,
  },
  goalsContainer : {
    flex : 6 ,
  }
});
