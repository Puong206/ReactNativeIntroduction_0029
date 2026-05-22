import { useState } from "react";
import { Alert } from "react-native";

const abra = () => {
    const [nama, setNama] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!nama || !username || !password) {
            Alert.alert("Error", "Semua field harus diisi!");
            return;
        }
        Alert.alert("Sukses", `Data Terkirim:\n\nNama: ${nama}\nUsername: ${username}\nPassword: ${password}`);
    };
}