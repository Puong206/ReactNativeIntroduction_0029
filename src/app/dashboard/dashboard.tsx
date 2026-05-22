import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

            </View>
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