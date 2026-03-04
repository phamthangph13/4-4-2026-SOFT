import { Text, View, StyleSheet } from "react-native"

export default function TextCource() {
    return (
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="middle" selectable={true} maxFontSizeMultiplier={1} textBreakStrategy="balanced">BẠN NGUYỄN THIỆN PHÚC NGƯỜI HÀ NỘI GỐC. !!!!! EGEGKEKGKEKGEKGEAKGgekgkeagkegkaekgekaKEGKE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "blue",
    }
})
