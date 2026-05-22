import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const username = params.username || "User";

  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    console.log("Search flights:", { tripType, from, to, departure, returnDate });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>dashboard</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Blue Section */}
        <View style={styles.blueSection}>
          <View style={styles.blueContent}>
            <View>
              <Text style={styles.greeting}>Hello {username},</Text>
              <Text style={styles.mainTitle}>Book your next Flight</Text>
            </View>
            <View style={styles.avatarCircle}>
              <MaterialIcons name="person" size={40} color="#1E88E5" />
            </View>
          </View>

          {/* Trip Type Buttons */}
          <View style={styles.tripTypeContainer}>
            <TouchableOpacity
              style={[styles.tripButton, tripType === "round" && styles.tripButtonActive]}
              onPress={() => setTripType("round")}
            >
              <Text style={[styles.tripButtonText, tripType === "round" && styles.tripButtonTextActive]}>
                Round Trip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tripButton, tripType === "oneway" && styles.tripButtonActive]}
              onPress={() => setTripType("oneway")}
            >
              <Text style={[styles.tripButtonText, tripType === "oneway" && styles.tripButtonTextActive]}>
                One way
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tripButton, tripType === "multi" && styles.tripButtonActive]}
              onPress={() => setTripType("multi")}
            >
              <Text style={[styles.tripButtonText, tripType === "multi" && styles.tripButtonTextActive]}>
                Multi city
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Flight Search Form */}
        <View style={styles.formContainer}>
          {/* From */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>From (Location)</Text>
            <TextInput
              style={styles.input}
              placeholder="New York (NYC)"
              value={from}
              onChangeText={setFrom}
              placeholderTextColor="#999"
            />
          </View>

          {/* To */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>To (Destination)</Text>
            <TextInput
              style={styles.input}
              placeholder="London (LDN)"
              value={to}
              onChangeText={setTo}
              placeholderTextColor="#999"
            />
          </View>

          {/* Departure & Return */}
          <View style={styles.dateRow}>
            <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Departure</Text>
              <TextInput
                style={styles.input}
                placeholder="Dec 4th, 2021"
                value={departure}
                onChangeText={setDeparture}
                placeholderTextColor="#999"
              />
            </View>
            <View style={[styles.formGroup, { flex: 1 }]}>
              <Text style={styles.label}>Return</Text>
              <TextInput
                style={styles.input}
                placeholder="Dec 16th, 2021"
                value={returnDate}
                onChangeText={setReturnDate}
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Search Button */}
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search flights</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Place */}
        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular place</Text>
          <Image
            source={{ uri: "https://via.placeholder.com/400x200?text=Tower+Bridge" }}
            style={styles.placeImage}
          />
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="home" size={24} color="#1E88E5" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="search" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="notifications" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="bookmark" size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  blueSection: {
    backgroundColor: "#1E88E5",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  blueContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 4,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  tripTypeContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tripButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
  },
  tripButtonActive: {
    backgroundColor: "#FFF",
  },
  tripButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFF",
  },
  tripButtonTextActive: {
    color: "#1E88E5",
  },
  formContainer: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#1E88E5",
    paddingVertical: 8,
    fontSize: 14,
    color: "#000",
  },
  dateRow: {
    flexDirection: "row",
  },
  searchButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  searchButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  popularSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 12,
  },
  placeImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    marginBottom: 16,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navText: {
    fontSize: 10,
    color: "#1E88E5",
    fontWeight: "600",
  },
});