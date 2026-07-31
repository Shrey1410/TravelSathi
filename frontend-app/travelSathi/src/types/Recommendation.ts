//Represents the Activity object in backend
export interface Activity {
  time: string;
  activity: string;
  location: string;
  duration: string;
  estimatedCost: number;
  notes: string;
}

//Represents the EmergencyContacts object in backend
export interface EmergencyContacts {
  police: string;
  hospital: string;
  touristHelpline: string;
}

//Represents the Itinerary object in backend
export interface Itinerary {
  day: number;
  title: string;
  activities: Activity[];
}

//Represents the Budget object in backend
export interface Budget {
  transport: number;
  hotel: number;
  food: number;
  activities: number;
  miscellaneous: number;
  total: number;
}

//Represents the Recommendation object in backend
export interface Recommendation {
  id: string;
  tripId: string;
  userId: string;
  summary: string;
  destination: string;
  destinationOverview: string;
  weather: string;
  itinerary: Itinerary[];
  estimatedBudget: Budget;
  destinationImageURL: string;
  packingSuggestions: string[];
  travelTips: string[];
  emergencyContacts: EmergencyContacts;
  createdAt: string;

  // Some additional Fields
  startDate: string;
  endDate: string;
  duration: string;
  budget: string;
}
