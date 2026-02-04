import { StyleSheet, Text, View } from "react-native";

export default function SongCard({ title, artist }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    artist: {
        fontSize: 14,
        color: "#666",
    }
})