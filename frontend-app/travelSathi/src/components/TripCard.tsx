import {
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
  
import { Link } from "react-router";

import type { Trip } from "../types/Trip";
  
interface Props {
  trip: Trip;
}
  
const TripCard = ({ trip }: Props) => {

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {trip.destination}
        </h2>
        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <MapPin size={18} />
          <span>{trip.source}</span>
          <ArrowRight size={16} />
          <span>{trip.destination}</span>
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span>
              {trip.startDate} - {trip.endDate}
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-8">
          <Link to={`/recommendation/${trip.id}`} state={{trip}} className="flex flex-1 items-center justify-center rounded-xl border border-blue-600 text-blue-600 py-3 font-semibold hover:bg-blue-50 transition">
            View AI Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;