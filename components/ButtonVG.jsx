import { Button, View } from "react-native";

const saidHello = () => {
    console.log("hello world")
}

export default function ButtonVG() {
    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Button
                disabled={fasle}
                onPress={saidHello}
                title="Test button"
                color={"red"}>
            </Button>
        </View>
    )
}