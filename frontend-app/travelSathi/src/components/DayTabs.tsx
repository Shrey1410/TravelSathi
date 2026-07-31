interface Props {selected: number; totalDays: number; onSelect: (day: number) => void;}
  
const DayTabs = ({selected, totalDays, onSelect}: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: totalDays }).map((_, index) => {
        const day = index + 1;
        return (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={`px-6 py-3 rounded-xl font-semibold transition
            ${
              selected === day
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            Day {day}
          </button>
        );
      })}
    </div>
  );
};

export default DayTabs;