import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native"
import { useState } from "react"

export default function GoalInput({ onAddGoal, modalIsVisible, endAddGoalHandler }) {
    const [goalInput, setGoalInput] = useState('')

    //fetch user input as it's typed
    function goalInputHandler(enteredText) {
        setGoalInput(enteredText)
    }

    //we're re-using this function name because it's in a different component so it's okay
    function addGoalHandler() {
        //we are calling the parent's function and passing it the stuff
        onAddGoal(goalInput);
        setGoalInput('');
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide" >

            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={goalInput}
                    placeholder='Enter a goal'
                   
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color={'#be98f0'} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={endAddGoalHandler} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    input: {
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        padding: 12,
        width: '80%',
        marginTop: 24,
        color: '#120438'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16
    },
    button: {
        width: '30%',
        paddingHorizontal: 6
    },
    image: {
        width: 100,
        height: 100,
    }
})