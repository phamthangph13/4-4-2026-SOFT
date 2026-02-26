import { View, Text, StyleSheet } from "react-native"

export default function TaskCard({ name, status }) {
    return (<View style={styles.container}>
        <Text style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            {" - "}<Text style={styles.status}>{status}</Text>
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
        margin: 10,
        padding: 10,
        backgroundColor: "yellow",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1
    },
    name: {
        color: "green",
        fontWeight: "bold",
    },
    status: {
        color: "red",
        fontWeight: "bold",
    }
})
