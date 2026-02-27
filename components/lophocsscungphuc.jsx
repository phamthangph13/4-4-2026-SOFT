import { StyleSheet, View, Text } from "react-native";

export default function LophocCSS() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Xin chào!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e25454ff",
    },
    box: {
        padding: 100,
        margin: 50,
        backgroundColor: "#007AFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
    },
    text: {
        fontSize: 20,
        color: "white",
    }
})