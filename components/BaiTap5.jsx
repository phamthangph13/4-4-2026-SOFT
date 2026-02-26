import { View, Text, Button, TextInput, StyleSheet, FlatList } from "react-native"
import { useState, useEffect } from "react"
import axios from "axios"
const baseUrl = "https://jsonplaceholder.typicode.com/users"




export default function BaiTap5() {
    const [listF, setListF] = useState([])
    const [username, setUsername] = useState("")
    const [original, setOriginal] = useState([])
    useEffect(() => {
        axios.get(baseUrl).then(response => {
            setListF(response.data)
            setOriginal(response.data)
        })
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            const result = original.filter((item) => item.username.includes(username))
            setListF(result)
        }, 500)
        return () => clearTimeout(timer)
    }, [username])
    return (<View style={styles.container}>
        <Text>Filter</Text>
        <TextInput style={styles.textinput} placeholder="Nhập tên user" value={username} onChangeText={setUsername}></TextInput>
        <Text>Danh sách User:</Text>
        <Text>{listF.map((item) => item.username)}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
        margin: 10,
        padding: 10,
        backgroundColor: "yellow",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1
    },
    item: {
        fontSize: 20,
        color: "black",
        margin: 10,
        padding: 10,
        backgroundColor: "yellow",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1
    },
    textinput: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: "80%",
    }
})