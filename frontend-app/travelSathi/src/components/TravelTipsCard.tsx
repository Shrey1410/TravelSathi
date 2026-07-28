import { Lightbulb } from "lucide-react";

interface Props {
  tips: string[];
}

const TravelTipsCard = ({ tips }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <Lightbulb className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">
          AI Travel Tips
        </h2>
      </div>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div
            key={tip}
            className="flex items-start gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
            <p className="text-slate-600">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTipsCard;