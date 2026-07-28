import { Sparkles } from "lucide-react";
import type { Recommendation } from "../types/Recommendation";

interface SummaryProps {
  recommendation: Recommendation;
}

const SummaryCard = ({ recommendation }: SummaryProps) => {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex items-center gap-3">

        <div className="bg-blue-100 rounded-full p-3">
          <Sparkles className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          AI Trip Summary
        </h2>

      </div>

      <p className="text-slate-600 text-lg leading-8 mt-6">
        {recommendation.summary}
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="rounded-2xl bg-slate-100 p-6">

          <h3 className="font-semibold text-slate-600">
            Duration
          </h3>

          <p className="text-3xl font-bold text-blue-600 mt-3">
            {recommendation.duration}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-100 p-6">

          <h3 className="font-semibold text-slate-600">
            Budget
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-3">
            {recommendation.budget}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-100 p-6">

          <h3 className="font-semibold text-slate-600">
            Destination
          </h3>

          <p className="text-3xl font-bold text-indigo-600 mt-3">
            {recommendation.destination}
          </p>

        </div>

      </div>

    </section>
  );
};

export default SummaryCard;