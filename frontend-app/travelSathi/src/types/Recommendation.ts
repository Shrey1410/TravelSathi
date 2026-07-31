export interface Activity {
    time: string;
    activity: string;
    location: string;
    duration: string;
    estimatedCost: number;
    notes: string;
}

export interface EmergencyContacts {
    police: string;
    hospital: string;
    touristHelpline: string;
}

export interface Itinerary {
    day: number;
    title: string;
    activities: Activity[];
}

export interface Budget {
    transport: number;
    hotel: number;
    food: number;
    activities: number;
    miscellaneous: number;
    total: number;
}

export interface Recommendation {
    destination: string;
    startDate: string;
    endDate: string;
    duration: string;
    budget: string;
    summary: string;
    weather: string;
    destinationImageURL: string;
    destinationOverview: string;
    estimatedBudget: Budget;
    itinerary: Itinerary[];
    packingSuggestions: string[];
    travelTips: string[];
    emergencyContacts: EmergencyContacts;
}