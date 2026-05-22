import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ini Halaman Form</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    }
});