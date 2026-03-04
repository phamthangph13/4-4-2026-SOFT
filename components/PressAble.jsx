
import { Pressable, View, Text, } from "react-native"



export default function PressAbleVG() {
    return (
        <View>
            <Pressable style={
                ({ pressed }) => [{ opacity: pressed ? 0.8 : 0.2 }, { backgroundColor: pressed ? "red" : "blue" }]

            }
                delayLongPress={1000}
                hitSlop={{ top: 20, left: 20, right: 40 }}
                onPressIn={() => { console.log("VUA MẠNH MAI!") }}
                onPressOut={() => { console.log("ĐÃ THOÁT!") }}
                onPress={() => { console.log("Chan tiền đê") }}
                onLongPress={() => {
                    console.log("Thả ra đi bà")
                }}
            >
                <View>
                    <Text>PHÚC BO</Text>
                </View>
            </Pressable>
        </View >
    )
}