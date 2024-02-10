import { View, Text, StyleSheet, Pressable } from "react-native"

export default function GoalItem({ text, id, onDeleteItem }) {
    return (


        <View style={styles.goalItemContainer}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                {/* <Pressable onPress={() => onDeleteItem(id)}> */}
                <Text style={styles.goalItemText}>*{text}</Text>
            </Pressable>
        </View>


    )
}

const styles = StyleSheet.create({
    goalItemContainer: {
        margin: 4,
        borderRadius: 5,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        color: '#fff'
    },
    
})