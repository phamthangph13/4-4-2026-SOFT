import { View, Button, Text, TextInput } from "react-native"
import { useEffect, useState } from "react"

export default function BaiTap2() {
    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")
    return (<View>
        <Text>Nhập số A</Text>
        <TextInput onChangeText={setNumber} value={number} placeholder="Nhập số" ></TextInput>
        <Button title="Kiểm tra" onPress={() => { setResult(checkNum(number)) }}></Button>
        <Text>{result}</Text>

    </View>)
}


function checkNum(number) {
    let convNum = parseInt(number)
    if (convNum % 2 === 0) {
        return "Số chẵn"
    }
    else {
        return "Số lẻ"
    }
}