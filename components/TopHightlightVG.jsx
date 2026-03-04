import { View, Text, TouchableHighlight } from "react-native"

export default function TopHightLight() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableHighlight
                onPress={() => {
                    console.log("Hello world topsl")
                }}>
                <View>
                    <Text>Nhấn vào em đi!</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}