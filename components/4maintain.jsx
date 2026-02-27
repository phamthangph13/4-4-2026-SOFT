import { StyleSheet, View, Text } from "react-native";

export default function Maintain() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topleft}></View>
                <View style={styles.topright}></View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomleft}></View>
                <View style={styles.bottomright}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        padding: 10,
        gap: 10
    },
    top: {
        flexDirection: "row",
        height: 100,
        gap: 10
    },
    topleft: {
        flex: 1,
        backgroundColor: "red",
        borderRadius: 10
    },
    topright: {
        flex: 1,
        backgroundColor: "blue",
        borderRadius: 10
    },
    bottom: {
        flexDirection: "row",
        height: 100,
        gap: 10
    },
    bottomleft: {
        flex: 1,
        backgroundColor: "green",
        borderRadius: 10
    },
    bottomright: {
        flex: 1,
        backgroundColor: "yellow",
        borderRadius: 10
    }

})


