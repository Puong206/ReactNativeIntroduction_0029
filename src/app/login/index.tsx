import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

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
}

export default function index () {
  return (
    
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
    }
});