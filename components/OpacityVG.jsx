import { View, TouchableOpacity, Text } from "react-native"

export default function OpacityVG() {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { console.log("HELLO WORLD OPAC") }}>
                <View>
                    <Text>Test Opaci</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}