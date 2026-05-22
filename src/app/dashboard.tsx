import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const username = params.username || "User";

  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("New York (NYC)");
  const [to, setTo] = useState("London (LDN)");
  const [departure, setDeparture] = useState("Dec 4th, 2021");
  const [returnDate, setReturnDate] = useState("Dec 16th, 2021");

  const handleSearch = () => {
    console.log("Search flights:", { tripType, from, to, departure, returnDate });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollView}>
        {/* Blue Section */}
        <View style={styles.blueSection}>
          <View style={styles.blueContent}>
            <View>
              <Text style={styles.greeting}>Hello {username},</Text>
              <Text style={styles.mainTitle}>Book your next Flight</Text>
            </View>
            <View style={styles.avatarCircle}>
              <MaterialIcons name="person" size={40} color="#FFFFFF" />
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
            source={require("../../assets/images/IMG_8537.png")}
            style={styles.placeImage}
          />
        </View>

        {/* Spacer for floating navbar */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating Bottom Navigation */}
      <View style={styles.floatingNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#FF7043" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemIcon}>
          <MaterialIcons name="folder" size={24} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemIcon}>
          <MaterialIcons name="notifications" size={24} color="#FDD835" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemIcon}>
          <MaterialIcons name="bookmark" size={24} color="#A1887F" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  blueSection: {
    backgroundColor: "#3B82F6",
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 20,
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
    fontWeight: "500",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  tripTypeContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tripButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  tripButtonActive: {
    backgroundColor: "#FFFFFF",
  },
  tripButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tripButtonTextActive: {
    color: "#3B82F6",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: -12,
    marginBottom: 16,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    zIndex: 10,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#1F2937",
  },
  dateRow: {
    flexDirection: "row",
  },
  searchButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  popularSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
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
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginBottom: 16,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  navItemIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  navText: {
    fontSize: 13,
    color: "#FF7043",
    fontWeight: "600",
  },
  floatingNav: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
});