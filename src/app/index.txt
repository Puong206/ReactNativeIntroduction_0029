import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>BOO!</Text>
      
      <Link href="/contoh">Halaman Contoh</Link>

      //
      <Text>Ini adalah form nama</Text>
      <TextInput
        placeholder="Masukkan Nama Anda"
      />

      <Link href="/abra">Halaman Anu</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
