import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SummaryCard from "../components/SummaryCard";
import WeatherCard from "../components/WeatherCard";
import DestinationCard from "../components/DestinationCard";
import BudgetCard from "../components/BudgetCard";
import PackingCard from "../components/PackingCard";
import TravelTipsCard from "../components/TravelTipsCard";
import EmergencyCard from "../components/EmergencyCard";
import Timeline from "../components/TimeLine";

import type { Recommendation } from "../types/Recommendation";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { getAuth } from "firebase/auth";
import axios from "axios";
import type { Trip } from "../types/Trip";

const RecommendationPage = () => {

  const location = useLocation();

  const { trip } = location.state as { trip: Trip };

  const {tripId} = useParams();

  const navigate = useNavigate();

  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  useEffect(()=>{
    const fetchRecommendation = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        alert("User is not authenticated.");
        navigate("/login");
        return;
      }
      const idToken = await user.getIdToken();
      try {
        const res = await axios.get(
          `http://localhost:8005/api/v1/recommendations/activity/${tripId}`,
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        )
        const start = new Date(trip.startDate);
        const end = new Date(trip.endDate);

        const diffInMs = end.getTime() - start.getTime();
        const durationInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        setRecommendation({
          ...res.data,
          destination : trip.destination,
          startDate : trip.startDate,
          endDate : trip.endDate,
          duration : durationInDays,
          budget : res.data?.estimatedBudget?.total

        })
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecommendation()
  }, [trip, tripId, navigate])

  if(recommendation && trip){
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
              destination={recommendation?.destination}
              overview={recommendation?.destinationOverview}
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
    </div>
  );
}
};

export default RecommendationPage;