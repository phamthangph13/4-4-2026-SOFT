import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Index() {
  const [jobs, setJobs] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  useEffect(() => {
    loadJob()
  }, []);

  async function addJob() {
    const newJob = {
      id: Date.now(),
      name: inputText,
      name2: inputText2
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

  async function deleteJob(id) {
    const newJobs = jobs.filter((job) => job.id !== id)
    setJobs(newJobs)
    try {
      await AsyncStorage.setItem("jobs", JSON.stringify(newJobs))
    } catch (error) {
      console.log(error)
    }
  }

  async function updateJob(id) {
    const newJobs = jobs.map((job) => {
      if (job.id === id) {
        return {
          ...job,
          name: inputText
        }
      }
      return job
    })
    setJobs(newJobs)
    try {
      await AsyncStorage.setItem("jobs", JSON.stringify(newJobs))
    } catch (error) {
      console.log(error)
    }
  }

  async function sortJob() {
    try {
      const newJobs = jobs.sort((a, b) => a.name.localeCompare(b.name))
      setJobs(newJobs)
      await AsyncStorage.setItem("jobs", JSON.stringify(newJobs))
      loadJob()
    } catch (error) {
      throw error;
    }
  }

  return (
    <View style={styles.container}>
      <Text>NHẬP VÀO CÔNG VIỆC MỚI</Text>
      <TextInput value={inputText} onChangeText={setInputText} style={styles.text} placeholder="Nhập công việc mới"></TextInput>
      <TextInput value={inputText2} onChangeText={setInputText2} style={styles.text} placeholder="Nhập người thực hiện"></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="THÊM CÔNG VIỆC" onPress={addJob}></Button>
        <Button title="TẢI LẠI" onPress={loadJob}></Button>
        <Button title="Sort A-Z" onPress={() => sortJob()}></Button>

      </View>
      <FlatList
        data={jobs}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.name2}</Text>
            <Button title="XÓA" onPress={() => deleteJob(item.id)}></Button>
            <Button title="CẬP NHẬT" onPress={() => updateJob(item.id)}></Button>

          </View>}
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
    color: "black",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  template: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4abbf3ff",
    borderRadius: 10,
  }
})