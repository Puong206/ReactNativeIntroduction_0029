import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        if (!username.trim() || !password.trim()) {
            console.log("Username dan password tidak boleh kosong");
            return;
        }

        console.log("Login attempt: ", { username, password });

        router.push({
            pathname: "/dashboard/dashboard",
            params: { username: username }
        });
    };

    return (
        <View style={styles.safeContainer}>
        <View style={styles.container}>
            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.text}>Silakan masuk ke akun Anda</Text>
        </View>

        <View style={styles.formSection}>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Username / Email</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
                activeOpacity={0.85}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    formSection: {
        width: "80%",
        gap: 32,
    },
    inputGroup: {
        marginBottom: 0,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#3B82F6",
        paddingVertical: 12,
        paddingHorizontal: 0,
        fontSize: 16,
        color: "#1F2937",
        fontWeight: "500"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
        color: "#333",
    },
    text: {
        fontSize: 16,
        color: "#555",
    },
    loginButton: {
        backgroundColor: "#3B82F6",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    }
});