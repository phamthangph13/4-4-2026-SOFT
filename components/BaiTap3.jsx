import { useEffect, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";

let missions = [
    {
        name: "Mua sữa",
        status: "Đã xong"
    },
    {
        name: "Đi học",
        status: "Đang làm"
    },
    {
        name: "Đi chơi",
        status: "Chưa làm"
    }
]

export default function BaiTap3() {
    const [mission, setMission] = useState(missions)
    const [missionName, setMissionName] = useState("")
    const [missionStatus, setMissionStatus] = useState("")
    useEffect(() => {
        console.log(mission)
    }, [mission])
    return (<View style={styles.container}>
        <Text>Thêm nhiệm vụ vào danh sachs</Text>
        <TextInput style={styles.input} placeholder="Nhập tên nhiệm vụ" value={missionName} onChangeText={setMissionName}></TextInput>
        <TextInput style={styles.input} placeholder="Nhập trạng thái" value={missionStatus} onChangeText={setMissionStatus}></TextInput>
        <Button style={styles.button} title="Thêm" onPress={() => { setMission([...mission, { name: missionName, status: missionStatus }]) }}></Button>
        <Text>Danh sách nhiệm vụ</Text>
        {mission.map((item, index) => (
            <TaskCard key={index} name={item.name} status={item.status} />
        ))}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d35959ff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: "80%",
    },
    button: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: "80%",
    }
})
