import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

// Import thư viện chuẩn mới
import * as SQLite from 'expo-sqlite';

export default function App() {
  const [db, setDb] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  // ------------------------------------------------------------------
  // QUY TRÌNH 1: KHỞI TẠO KẾT NỐI VÀ TẠO BẢNG
  // ------------------------------------------------------------------
  useEffect(() => {
    const initDB = async () => {
      try {
        // Mở kết nối Database (Cú pháp mới)
        const database = await SQLite.openDatabaseAsync('TodoList.db');
        setDb(database);

        // Tạo bảng nếu chưa có (Dùng execAsync cho các lệnh không cần tham số)
        await database.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT);
        `);

        // Tải dữ liệu ban đầu
        fetchTasks(database);
      } catch (error) {
        Alert.alert('Lỗi', 'Không thể khởi tạo cơ sở dữ liệu.');
      }
    };
    initDB();
  }, []);

  // ------------------------------------------------------------------
  // QUY TRÌNH 2: LẤY DỮ LIỆU TỪ BẢNG (SELECT)
  // ------------------------------------------------------------------
  const fetchTasks = async (database) => {
    try {
      // Dùng getAllAsync để lấy mảng kết quả
      const allRows = await database.getAllAsync('SELECT * FROM tasks ORDER BY id DESC');
      setTasks(allRows); // allRows là một mảng: [{id: 1, title: 'Học React Native'}, ...]
    } catch (error) {
      console.log('Lỗi lấy dữ liệu', error);
    }
  };

  // ------------------------------------------------------------------
  // QUY TRÌNH 3: THÊM DỮ LIỆU (INSERT)
  // ------------------------------------------------------------------
  const addTask = async () => {
    if (inputText.trim() === '') return;
    try {
      // Dùng runAsync kèm tham số để chống SQL Injection
      await db.runAsync('INSERT INTO tasks (title) VALUES (?)', [inputText.trim()]);

      setInputText('');
      fetchTasks(db); // Cập nhật lại danh sách trên màn hình
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể thêm công việc.');
    }
  };

  // ------------------------------------------------------------------
  // QUY TRÌNH 4: XÓA DỮ LIỆU (DELETE)
  // ------------------------------------------------------------------
  const deleteTask = async (id) => {
    try {
      await db.runAsync('DELETE FROM tasks WHERE id = ?', [id]);
      fetchTasks(db); // Cập nhật lại danh sách trên màn hình
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể xóa công việc.');
    }
  };
  // ------------------------------------------------------------------
  // GIAO DIỆN (UI)
  // ------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List (SQLite Modern API)</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập công việc..."
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity style={styles.saveButton} onPress={addTask}>
        <Text style={styles.buttonText}>THÊM CÔNG VIỆC</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()} // Phải ép kiểu chuỗi cho ID
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.title}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
              <Text style={styles.buttonSmallText}>XÓA</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Stylesheet giữ nguyên như các phần trước
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#ffffff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#cccccc', padding: 12, marginBottom: 15, borderRadius: 4, fontSize: 16 },
  saveButton: { backgroundColor: '#4e92ef', padding: 15, alignItems: 'center', marginBottom: 10, borderRadius: 4 },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  taskItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eeeeee' },
  taskText: { fontSize: 16, color: '#333333', flex: 1 },
  deleteButton: { backgroundColor: '#e74c3c', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
  buttonSmallText: { color: '#ffffff', fontWeight: 'bold', fontSize: 11 },
});