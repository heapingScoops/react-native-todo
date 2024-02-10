
import { StyleSheet, Text, View, Pressable, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goalList, setGoalList] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  //move user input to the list of goals
  function addGoalHandler(goalInput) {
    //Make this shit an object here. 
    setGoalList(previousGoalList => [...previousGoalList, { text: goalInput, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalList((previousGoalList) => {
      return previousGoalList.filter((goal) => goal.id !== id)
    })
  }
  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#b080ef' onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} modalIsVisible={modalIsVisible} endAddGoalHandler={endAddGoalHandler} />
        <View style={styles.listContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}

          />
        </View>
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },


  listContainer: {
    flex: 5,
  }
});
