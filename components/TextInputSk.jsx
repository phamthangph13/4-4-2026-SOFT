import { TextInput, View } from "react-native";
import { useState } from "react"
export default function TextGHK() {

    const [val, SetVal] = useState("");
    return (
        <View>
            <TextInput
                placeholder="Nhập tên..."
                value={val}
                onChangeText={SetVal}

                style={{

                    borderWidth: 1,
                    borderColor: "red",

                }}
                placeholderTextColor="blue"
                // keyboardType="number-pad"
                // multiline={true}
                // numberOfLines={5}
                // maxLength={10}
                // autoCapitalize="sentences"
                secureTextEntry={true}

            ></TextInput>
        </View>
    )
}