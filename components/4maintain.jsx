import { StyleSheet, View, Text } from "react-native";

export default function Maintain() {
    return (
        <View style={styles.container}>
            <View style={styles.row_1}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
            <View style={styles.row_2}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between", //Trục chinhs Y
        backgroundColor: "yellow",
    },
    row_1: {
        backgroundColor: "red",

        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between", //Trục ngang Y

    },
    row_2: {
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",

    },

    box: {
        BorderRadius: 10,
        height: 100,
        width: 100,
        backgroundColor: "green",
    }


})


