import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SummaryCard from "../components/SummaryCard";
import WeatherCard from "../components/WeatherCard";
import DestinationCard from "../components/DestinationOverview";
import BudgetCard from "../components/BudgetCard";
import PackingCard from "../components/PackingCard";
import TravelTipsCard from "../components/TravelTipsCard";
import EmergencyCard from "../components/EmergencyCard";
import FloatingActions from "../components/FloatingActions";
import Timeline from "../components/TimeLine";

import type { Recommendation } from "../types/Recommendation";

const recommendation: Recommendation = {
  destination: "Manali",
  startDate: "15 Aug 2026",
  endDate: "20 Aug 2026",
  duration: "5 Days",
  budget: "₹25,000",

  summary:
    "Experience the breathtaking beauty of Manali with a perfect blend of adventure and relaxation.",

  weather:
    "Pleasant weather with temperatures between 18°C and 24°C. Light showers are expected in the evenings.",

  destinationOverview:
    "Manali is a picturesque hill station in Himachal Pradesh famous for snow-capped mountains, adventure sports, rivers, and vibrant local markets.",

  estimatedBudget: {
    transport: 4500,
    hotel: 9000,
    food: 4500,
    activities: 5000,
    miscellaneous: 2000,
    total: 25000,
  },

  itinerary: [
    {
      day: 1,
      title: "Arrival & Local Sightseeing",
      activities: [
        {
          time: "09:00",
          activity: "Hotel Check-in",
          location: "Mall Road",
          duration: "1 Hour",
          estimatedCost: 500,
          notes: "Freshen up before exploring.",
        },
        {
          time: "11:00",
          activity: "Hadimba Temple",
          location: "Old Manali",
          duration: "2 Hours",
          estimatedCost: 200,
          notes: "Carry your camera.",
        },
        {
          time: "14:00",
          activity: "Lunch",
          location: "Johnson's Cafe",
          duration: "1 Hour",
          estimatedCost: 700,
          notes: "Try local Himachali cuisine.",
        },
      ],
    },
    {
      day: 2,
      title: "Adventure Day",
      activities: [
        {
          time: "09:00",
          activity: "Solang Valley",
          location: "Solang",
          duration: "5 Hours",
          estimatedCost: 3500,
          notes: "Paragliding & Ropeway.",
        },
        {
          time: "17:00",
          activity: "Cafe Hopping",
          location: "Old Manali",
          duration: "2 Hours",
          estimatedCost: 1000,
          notes: "Relax with mountain views.",
        },
      ],
    },
  ],

  packingSuggestions: [
    "Warm Jacket",
    "Power Bank",
    "Umbrella",
    "Hiking Shoes",
    "Medicines",
    "Sunglasses",
    "Water Bottle",
  ],

  travelTips: [
    "Carry enough cash for remote areas.",
    "Download offline Google Maps.",
    "Start sightseeing early.",
    "Keep warm clothes handy.",
    "Respect local customs.",
  ],

  emergencyContacts: {
    police: "100",
    hospital: "108",
    touristHelpline: "1363",
  },
};

const RecommendationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">

        {/* Hero */}
        <HeroSection recommendation={recommendation} />

        {/* Summary */}
        <SummaryCard recommendation={recommendation} />

        {/* Weather + Destination */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <WeatherCard weather={recommendation.weather} />
          </div>

          <div className="lg:col-span-2">
            <DestinationCard
              destination={recommendation.destination}
              overview={recommendation.destinationOverview}
            />
          </div>
        </section>

        {/* Budget */}
        <section>
          <BudgetCard budget={recommendation.estimatedBudget} />
        </section>

        {/* Timeline */}
        <section>
          <Timeline itinerary={recommendation.itinerary} />
        </section>

        {/* Bottom Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <PackingCard
            packing={recommendation.packingSuggestions}
          />

          <TravelTipsCard
            tips={recommendation.travelTips}
          />

          <EmergencyCard
            contacts={recommendation.emergencyContacts}
          />

        </section>

      </main>

      {/* Floating Buttons */}
      <FloatingActions />
    </div>
  );
};

export default RecommendationPage;