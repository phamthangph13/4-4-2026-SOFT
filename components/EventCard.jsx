import { StyleSheet, Text, View } from "react-native";

export default function EventCard({ name, isActive }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={{ color: isActive ? "green" : "grey" }}>{isActive ? "Sự kiện Phúc Xem thread đang diễn ra" : "Sự kiện Phúc đang xem thread city đã kết thúc"}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#433df7ff",
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: "white",

    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },

})