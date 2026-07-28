import { MapPinned } from "lucide-react";

interface Props {
  destination: string;
  overview: string;
}

const DestinationCard = ({
  destination,
  overview,
}: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-100 p-3 rounded-full">
          <MapPinned className="text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold">
          About {destination}
        </h2>
      </div>
      <p className="text-slate-600 leading-8">
        {overview}
      </p>
    </div>
  );
};

export default DestinationCard;