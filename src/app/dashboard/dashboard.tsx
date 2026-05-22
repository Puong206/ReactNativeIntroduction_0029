import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

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
}