import {
    Clock3,
    MapPin,
    Wallet,
    StickyNote
  } from "lucide-react";
  
  import type { Activity } from "../types/Recommendation";
  
  interface Props {
    activity: Activity;
  }
  
  const ActivityCard = ({ activity }: Props) => {
    return (
      <div className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
  
        <div className="absolute -left-10 top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-white"></div>
  
        <span className="text-blue-600 font-semibold">
          {activity.time}
        </span>
  
        <h3 className="text-2xl font-bold mt-2">
          {activity.activity}
        </h3>
  
        <div className="grid md:grid-cols-3 gap-5 mt-6">
  
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {activity.location}
          </div>
  
          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {activity.duration}
          </div>
  
          <div className="flex items-center gap-2">
            <Wallet size={18} />
            ₹{activity.estimatedCost}
          </div>
  
        </div>
  
        <div className="flex gap-2 mt-6">
  
          <StickyNote size={18} />
  
          <p className="text-slate-600">
            {activity.notes}
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default ActivityCard;