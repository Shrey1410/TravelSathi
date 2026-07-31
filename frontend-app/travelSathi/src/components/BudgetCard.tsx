import { Wallet } from "lucide-react";
import type { Budget } from "../types/Recommendation";

interface Props {
  budget: Budget;
}

const BudgetBar = ({ label, value, total }: { label: string; value: number; total: number;}) => {
  const width = (value / total) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>₹{value.toLocaleString()}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className="bg-linear-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
};

const BudgetCard = ({ budget }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <Wallet className="text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold">
          Budget Breakdown
        </h2>
      </div>
      <div className="space-y-5">
        <BudgetBar
          label="Transport"
          value={budget.transport}
          total={budget.total}
        />
        <BudgetBar
          label="Hotel"
          value={budget.hotel}
          total={budget.total}
        />
        <BudgetBar
          label="Food"
          value={budget.food}
          total={budget.total}
        />
        <BudgetBar
          label="Activities"
          value={budget.activities}
          total={budget.total}
        />
        <BudgetBar
          label="Miscellaneous"
          value={budget.miscellaneous}
          total={budget.total}
        />
      </div>

      <div className="border-t mt-8 pt-6 flex justify-between text-xl font-bold">
        <span>Total</span>
        <span className="text-blue-600">
          ₹{budget.total.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;