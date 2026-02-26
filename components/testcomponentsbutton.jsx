import { Button } from "react-native";
import react, { useState } from 'react';

function NutNhan() {
    const [valueF, valueFState] = useState("Đăng nhập")
    const [toggle, toggleS] = useState(0)
    return (
        <Button title={toggle ? "Đăng nhập" : "Đăng Ký"} onPress={() => { toggleS(toggle ? 1 : 0) }}></Button>
    )
}

export default NutNhan;