import { CloudSun } from "lucide-react";
  
interface Props {
  weather: string;
}
  
const WeatherCard = ({ weather }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-100 p-3 rounded-full">
          <CloudSun className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Weather
        </h2>
      </div>
      <p className="mt-6 text-slate-600 leading-7">
        {weather}
      </p>
    </div>
  );
};
  
export default WeatherCard;