import { Image, View } from "react-native";


export default function ImageTs() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMbb5CLQB3k6vLLaCfmzxjQM6QOrHxHCDxQ&s' }}
                style={{
                    width: 400,
                    height: 400,
                    borderRadius: 20,
                    resizeMode: "cover",

                }}
                blurRadius={10}
                defaultSource={require('../assets/images/android-icon-foreground.png')}></Image>
        </View>
    )
}

