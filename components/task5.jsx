import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function Task5() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (value >= 5) {
            console.log("Đã nhấn 5 lần");
        }
    }, [value])
    return (<View>
        <Text>Số lần nhấn: {value}</Text>
        <Button title="Click here" onPress={() => setValue(value + 1)}></Button>
    </View>)
}