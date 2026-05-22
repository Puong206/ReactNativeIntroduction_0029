import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Abra = () => {
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

            <View>
                <Text style={styles.label}>Nama Lengkap:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan nama lengkap"
                    value={nama}
                    onChangeText={(text) => setNama(text)}
                />
            </View>

            <View>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>

            <View>
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Abra;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#f5f5f5"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
        color: "#333",
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
        color: '#555',
    },
    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});