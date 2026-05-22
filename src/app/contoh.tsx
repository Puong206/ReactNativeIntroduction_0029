import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function contoh() {
  return (
    <View style={styles.container}>
          <Text>BOO!</Text>
          
         
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
