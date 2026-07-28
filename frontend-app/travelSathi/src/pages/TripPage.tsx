import Navbar from "../components/Navbar";
import TripCard from "../components/TripCard";

import type { Trip } from "../types/Trip";

const trips: Trip[] = [
  {
    id: "1",
    source: "Delhi",
    destination: "Manali",
    startDate: "15 Aug 2026",
    endDate: "20 Aug 2026",
    budget: 25000,
    status: "COMPLETED",
  },
  {
    id: "2",
    source: "Mumbai",
    destination: "Goa",
    startDate: "10 Sep 2026",
    endDate: "15 Sep 2026",
    budget: 18000,
    status: "PROCESSING",
  },
  {
    id: "3",
    source: "Dehradun",
    destination: "Rishikesh",
    startDate: "5 Oct 2026",
    endDate: "7 Oct 2026",
    budget: 8000,
    status: "QUEUED",
  },
  {
    id: "4",
    source: "Jaipur",
    destination: "Udaipur",
    startDate: "12 Nov 2026",
    endDate: "15 Nov 2026",
    budget: 15000,
    status: "FAILED",
  },
];

const TripsPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">

              My Trips

            </h1>

            <p className="text-slate-500 mt-2">

              Track all your trips and AI-generated travel plans.

            </p>

          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">

            + New Trip

          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {trips.map((trip) => (

            <TripCard
              key={trip.id}
              trip={trip}
            />

          ))}

        </div>

      </main>

    </div>
  );
};

export default TripsPage;