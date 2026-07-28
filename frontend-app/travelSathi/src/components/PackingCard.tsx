import { Backpack } from "lucide-react";

interface Props {
  packing: string[];
}

const PackingCard = ({ packing }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <Backpack className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">
          Packing Checklist
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {packing.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PackingCard;