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
    
};