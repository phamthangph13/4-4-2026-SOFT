import { Button, Text } from "react-native";

function Testreturn(a, b) {
    return a + b;
}

function Task2() {
    return (
        <>
            <Text>task2</Text>
            <Button title="Click me" onPress={() => {
                console.log(Testreturn(1, 2));
            }} />
        </>
    )

}
export default Task2;