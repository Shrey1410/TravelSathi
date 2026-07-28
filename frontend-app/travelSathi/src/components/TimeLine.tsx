import { useState } from "react";

import type { Itinerary } from "../types/Recommendation";

import DayTabs from "./DayTabs";
import ActivityCard from "./ActivityCard";

interface Props {
  itinerary: Itinerary[];
}

const Timeline = ({ itinerary }: Props) => {

  const [selectedDay, setSelectedDay] = useState(1);

  const currentDay =
    itinerary.find((d) => d.day === selectedDay);

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">

        AI Generated Itinerary

      </h2>

      <DayTabs
        selected={selectedDay}
        totalDays={itinerary.length}
        onSelect={setSelectedDay}
      />

      <div className="mt-10">

        <h3 className="text-2xl font-bold text-blue-600">

          {currentDay?.title}

        </h3>

        <div className="relative mt-8">

          <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-200"></div>

          <div className="space-y-8 ml-12">

            {currentDay?.activities.map((activity, index) => (

              <ActivityCard
                key={index}
                activity={activity}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Timeline;