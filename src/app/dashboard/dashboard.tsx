import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function DashboardScreen() {
    const router = useRouter();
    const { username } = useLocalSearchParams();

    const [tripType, setTripType] = useState("round");
    const [fromLocation, setFromLocation] = useState("New York (NYC)");
    const [toLocation, setToLocation] = useState("London (LDN)");
    const [departureDate, setDepartureDate] = useState("Dec 4th, 2021");
    const [returnDate, setReturnDate] = useState("Dec 16th, 2021");

    const handleBackPress = () => {
        router.back();
    };

    const handleHomePress = () => {
        console.log("Navigate to Home");
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>dashboard</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Blue Section - Greeting & Profile */}
        <View style={styles.blueSection}>
          <View style={styles.greetingContainer}>
            <View>
              <Text style={styles.greeting}>Hello {username},</Text>
              <Text style={styles.bookingTitle}>Book your next Flight</Text>
            </View>
            <View style={styles.avatarCircle}>
              <MaterialIcons name="person" size={32} color="#3B82F6" />
            </View>
          </View>

          {/* Trip Type Selector */}
          <View style={styles.tripTypeContainer}>
            <TouchableOpacity
              style={[
                styles.tripTypeButton,
                tripType === "round" && styles.tripTypeButtonActive,
              ]}
              onPress={() => setTripType("round")}
            >
              <Text
                style={[
                  styles.tripTypeText,
                  tripType === "round" && styles.tripTypeTextActive,
                ]}
              >
                Round Trip
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tripTypeButton,
                tripType === "one" && styles.tripTypeButtonActive,
              ]}
              onPress={() => setTripType("one")}
            >
              <Text
                style={[
                  styles.tripTypeText,
                  tripType === "one" && styles.tripTypeTextActive,
                ]}
              >
                One way
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tripTypeButton,
                tripType === "multi" && styles.tripTypeButtonActive,
              ]}
              onPress={() => setTripType("multi")}
            >
              <Text
                style={[
                  styles.tripTypeText,
                  tripType === "multi" && styles.tripTypeTextActive,
                ]}
              >
                Multi city
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Section */}
          <View style={styles.formCard}>
            {/* From Location */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>From (Location)</Text>
              <TextInput
                style={styles.formInput}
                value={fromLocation}
                onChangeText={setFromLocation}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* To Destination */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>To (Destination)</Text>
              <TextInput
                style={styles.formInput}
                value={toLocation}
                onChangeText={setToLocation}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Date Row */}
            <View style={styles.dateRowContainer}>
              <View style={[styles.formGroup, { flex: 1 }]}>
                <Text style={styles.formLabel}>Departure</Text>
                <TextInput
                  style={styles.formInput}
                  value={departureDate}
                  onChangeText={setDepartureDate}
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              {tripType === "round" && (
                <View style={[styles.formGroup, { flex: 1, marginLeft: 12 }]}>
                  <Text style={styles.formLabel}>Return</Text>
                  <TextInput
                    style={styles.formInput}
                    value={returnDate}
                    onChangeText={setReturnDate}
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              )}
            </View>

            {/* Search Button */}
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearchFlights}
            >
              <Text style={styles.searchButtonText}>Search flights</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Place Section */}
        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular place</Text>

          <View style={styles.placeCard}>
            {/* Placeholder for Image */}
            <View style={styles.imagePlaceholder}>
              <MaterialIcons name="image" size={48} color="#9CA3AF" />
            </View>

            {/* Navigation Icons at Bottom */}
            <View style={styles.placeNavigation}>
              <TouchableOpacity
                style={styles.navItem}
                onPress={handleHomePress}
              >
                <Ionicons name="home" size={24} color="#3B82F6" />
                <Text style={styles.navLabel}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="folder" size={24} color="#9CA3AF" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="notifications" size={24} color="#9CA3AF" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="bookmark" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    safeContainer: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
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
        color: "#1F2937"
    },
    blueSection: {
        backgroundColor: "#3B82F6",
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
    },
    greetingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 24,
    },

    greeting: {
        fontSize: 14,
        fontWeight: "500",
        color: "#E0E7FF",
        marginBottom: 4,
    },

    bookingTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    avatarCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    tripTypeContainer: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 12,
    },

    tripTypeButton: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        alignItems: "center",
    },

    tripTypeButtonActive: {
        backgroundColor: "#FFFFFF",
    },

    tripTypeText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#FFFFFF",
    },

    tripTypeTextActive: {
        color: "#3B82F6",
    },

    formCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        gap: 16,
    },

    formGroup: {
        marginBottom: 0,
    },

    formLabel: {
        fontSize: 13,
        fontWeight: "500",
        color: "#6B7280",
        marginBottom: 8,
    },

    formInput: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 15,
        fontWeight: "600",
        color: "#1F2937",
    },

    dateRowContainer: {
        flexDirection: "row",
        gap: 12,
    },

    searchButton: {
        backgroundColor: "#3B82F6",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 8,
    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    popularSection: {
        paddingHorizontal: 20,
        marginTop: 28,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1F2937",
        marginBottom: 16,
    },

    placeCard: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    imagePlaceholder: {
        width: "100%",
        height: 200,
        backgroundColor: "#F3F4F6",
        alignItems: "center",
        justifyContent: "center",
    },

    placeNavigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E5E7EB",
    },

    navItem: {
        alignItems: "center",
        gap: 4,
    },

    navLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#3B82F6",
        marginTop: 4,
    },
};