import { ScrollView, View, Text } from "react-native";

export default function CardItems() {
    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ height: 200 }}>
            <View style={{ width: 300 }}>
                <Text>PHÚC</Text>
            </View>
            <View style={{ width: 300 }}>
                <Text>PHÚC</Text>
            </View>
            <View style={{ width: 300 }}>
                <Text>PHÚC</Text>
            </View>
            <View style={{ width: 300 }}>
                <Text>PHÚC</Text>
            </View>
            <View style={{ width: 300 }}>
                <Text>PHÚC</Text>
            </View>
        </ScrollView>

    )
}