import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TripCard from "../components/TripCard";

import type { Trip } from "../types/Trip";
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const TripPage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const navigate = useNavigate()

  useEffect( () => {
    const fetchTrips = async () =>{
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
          `http://localhost:8005/api/v1/trips`,
          {
            params: {
              userId: user.uid,
            },
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        )
        setTrips(res.data)
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTrips()
  }, [])

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
          <Link to="/plan" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            + New Trip
          </Link>
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

export default TripPage;