import { StyleSheet, Text, View } from "react-native";

export default function InfoCard({ name, city }) {
    return (
        <View style={styles.container}>
            <Text>Name: {name}</Text>
            <Text>City: {city}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#433df7ff",
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: "white",

    }
})