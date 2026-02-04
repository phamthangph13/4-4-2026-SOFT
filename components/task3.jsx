import { Text, View } from "react-native";
const isSignIn = true;

const listitems = [
    { id: 1, name: "Pham Nhu Thang", age: 20 },
    { id: 2, name: "Pham Nhu Thang", age: 20 },
    { id: 3, name: "Pham Nhu Thang", age: 20 },
    { id: 4, name: "Pham Nhu Thang", age: 20 },
    { id: 5, name: "Pham Nhu Thang", age: 20 },
    { id: 6, name: "Pham Nhu Thang", age: 20 },
    { id: 7, name: "Pham Nhu Thang", age: 20 },
    { id: 8, name: "Pham Nhu Thang", age: 20 },
    { id: 9, name: "Pham Nhu Thang", age: 20 },
    { id: 10, name: "Pham Nhu Thang", age: 20 },
]
export default function Task3() {
    return (
        <View>
            <Text> {isSignIn ? "Welcome PHAM NHU THANG" : "Please sign in"}</Text>
            {listitems.map((item) => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    )
}