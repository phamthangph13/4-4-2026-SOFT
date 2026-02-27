import { StyleSheet, View, Text } from "react-native";

export default function CSSPart2() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <Text>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    box1: {
        width: 35,
        height: 100,
        backgroundColor: "blue",
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    }
})