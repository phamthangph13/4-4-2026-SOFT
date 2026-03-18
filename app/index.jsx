import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Index() {
  const [jobs, setJobs] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    loadJob()
  }, []);

  async function addJob() {
    const newJob = {
      id: Date.now(),
      name: inputText
    }
    setJobs([...jobs, newJob])
    try {
      await AsyncStorage.setItem("jobs", JSON.stringify(jobs))
    } catch (error) {
      console.log(error)
    }

  }

  async function loadJob() {
    try {
      const data = await AsyncStorage.getItem("jobs")
      if (data) {
        setJobs(JSON.parse(data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>NHẬP VÀO CÔNG VIỆC MỚI</Text>
      <TextInput value={inputText} onChangeText={setInputText} style={styles.text} placeholder="Nhập công việc mới"></TextInput>
      <Button title="THÊM CÔNG VIỆC" onPress={addJob}></Button>
      <Button title="TẢI LẠI" onPress={loadJob}></Button>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    fontSize: 20,
    color: "white",
  }
})