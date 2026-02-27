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
        height: 100,
    },
    box1: {
        flex: 0.1,
        backgroundColor: "blue",
    },
    box2: {
        flex: 0.3,
        backgroundColor: "red",
    }
})