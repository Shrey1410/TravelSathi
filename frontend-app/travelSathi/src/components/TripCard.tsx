import {
    Calendar,
    IndianRupee,
    MapPin,
    ArrowRight,
    LoaderCircle,
    CircleCheckBig,
    CircleAlert,
    Clock3,
  } from "lucide-react";
  
  import type { Trip } from "../types/Trip";
  
  interface Props {
    trip: Trip;
  }
  
  const TripCard = ({ trip }: Props) => {
    const renderStatus = () => {
      switch (trip.status) {
        case "QUEUED":
          return (
            <div className="flex items-center gap-2 text-gray-500">
              <Clock3 size={18} />
              <span>Waiting for AI</span>
            </div>
          );
  
        case "PROCESSING":
          return (
            <>
              <div className="flex items-center gap-2 text-blue-600">
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
                <span>Generating AI Plan</span>
              </div>
  
              <div className="mt-3 w-full h-2 bg-slate-200 rounded-full">
                <div className="w-2/3 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>
            </>
          );
  
        case "COMPLETED":
          return (
            <div className="flex items-center gap-2 text-green-600">
              <CircleCheckBig size={18} />
              <span>AI Plan Ready</span>
            </div>
          );
  
        case "FAILED":
          return (
            <div className="flex items-center gap-2 text-red-600">
              <CircleAlert size={18} />
              <span>Generation Failed</span>
            </div>
          );
      }
    };
  
    return (
      <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
  
        <img
          src={`https://picsum.photos/500/300?random=${trip.id}`}
          alt={trip.destination}
          className="h-52 w-full object-cover"
        />
  
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
  
            <div className="flex items-center gap-3">
  
              <IndianRupee size={18} />
  
              <span>
                ₹{trip.budget.toLocaleString()}
              </span>
  
            </div>
  
          </div>
  
          <div className="mt-6">
  
            {renderStatus()}
  
          </div>
  
          <div className="flex gap-3 mt-8">
  
            <button className="flex-1 rounded-xl border border-blue-600 text-blue-600 py-3 font-semibold hover:bg-blue-50 transition">
  
              View Trip
  
            </button>
  
            {trip.status === "COMPLETED" && (
  
              <button className="flex-1 rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition">
  
                View AI Plan
  
              </button>
  
            )}
  
            {trip.status === "FAILED" && (
  
              <button className="flex-1 rounded-xl bg-red-600 text-white py-3 hover:bg-red-700 transition">
  
                Retry
  
              </button>
  
            )}
  
          </div>
  
        </div>
      </div>
    );
  };
  
  export default TripCard;