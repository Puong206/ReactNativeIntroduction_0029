import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
      pathname: "./dashboard",
      params: { username: username },
    });
  };

  const handleMenuPress = () => {
    console.log("Menu pressed");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>index</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Container */}
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Username / Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username / Email</Text>
              <TextInput
                style={styles.input}
                placeholder="abra"
                placeholderTextColor="#9CA3AF"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },

  headerSection: {
    marginBottom: 48,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E40AF",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
    textAlign: "center",
  },

  formSection: {
    width: "100%",
    gap: 32,
  },

  inputGroup: {
    marginBottom: 0,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 0,
    fontSize: 16,
    color: "#1F2937",
    fontWeight: "500",
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
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});