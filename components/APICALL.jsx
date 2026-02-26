import { View, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"

const baseUrl = "https://dogapi.dog/api/v2"

export default function ApiCall() {
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/breeds`,
            {
                page: {
                    number: 1,
                    size: 10
                }

            }
        ).then(response => {
            setBreeds(response.data.data)
        })
    }, [])
    return (
        <View>
            {breeds.map((item, index) => (
                <Text key={index} style={styles.item}>{item.attributes.description}</Text>
            ))}
        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        color: "blue",
        fontSize: 20,
        margin: 10,
        padding: 10,
        backgroundColor: "yellow",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1
    }
})