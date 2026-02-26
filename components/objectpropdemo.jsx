import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})

export default function ObjectPropDemo({ myobj }) {
    return (
        <View style={styles.container}>
            <Text >{myobj.name} : {myobj.age}</Text>
        </View>
    )
}

