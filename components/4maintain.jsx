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
        justifyContent: "space-between",
    },
    row_1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    row_2: {


        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },

    box: {
        BorderRadius: 10,
        height: 100,
        width: 100,
        backgroundColor: "green",
    }


})


