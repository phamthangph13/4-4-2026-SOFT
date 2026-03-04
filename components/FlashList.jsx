import { View, Text, FlatList } from "react-native"

const data = [
    {
        idx: 1,
        name: "MM"
    }, {
        idx: 2,
        name: "MGM"

    }, {
        idx: 3,
        name: "MMSSS"

    }, {
        idx: 4,
        name: "MEGEGEAM"

    }
]

export default function FlashListLF() {
    return (
        <View>
            <FlatList data={data}
                // horizontal={false}
                onEndReached={() => { console.log("CUỐI DANH SÁCH") }}
                // onRefresh={true}
                numColumns={2}
                ItemSeparatorComponent={() => {
                    return (<View>
                        <Text>TEST</Text>
                    </View>)
                }}
                keyExtractor={(item) => item.idx}
                renderItem={({ item }) => {
                    return <View style={{ flex: 1, }}>
                        <Text>{item.idx} - {item.name}</Text>
                    </View>
                }}>
            </FlatList>
        </View>
    )
}