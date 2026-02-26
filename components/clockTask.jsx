import { View, Text } from "react-native"
import { useEffect, useState } from "react"



export default function ClockTask() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <View>
            <Text>Thời gian thực: {time}</Text>

        </View>
    )
}