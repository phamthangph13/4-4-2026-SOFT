import { View, Text, StyleSheet, Button } from "react-native";

export default function Testfunctionprop({ testStr, functionprop }) {
    return (
        <View>
            <Button onPress={functionprop} title={testStr}>TEST BUTTON</Button>
        </View>
    )
}

