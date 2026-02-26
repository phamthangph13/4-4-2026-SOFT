import { View, Text, Button, Alert, StyleSheet } from "react-native"
import { useEffect, useState } from "react"

export default function BaiTap1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count < 0) {
            Alert.alert("Count không được nhỏ hơn 0");
            setCount(0);
        }
    }, [count])
    return (<View>
        <Text style={styles.text}>Số count: {count}</Text>

        <Button title="Giảm" onPress={() => setCount(count - 1)}></Button>
        <Button title="Tăng" onPress={() => setCount(count + 1)}></Button>
    </View>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "blue",
        margin: 10,
        padding: 10,
    }
})