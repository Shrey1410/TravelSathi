import {
  CloudSun,
  Thermometer,
  Wind,
  Droplets,
} from "lucide-react";
  
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
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Thermometer className="text-red-500" />
            <span>Temperature</span>
          </div>
          <span className="font-semibold">
            18°C - 24°C
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wind className="text-sky-500" />
            <span>Wind</span>
          </div>
          <span>12 km/h</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Droplets className="text-cyan-500" />
            <span>Humidity</span>
          </div>
          <span>58%</span>
        </div>
      </div>
      <p className="mt-6 text-slate-600 leading-7">
        {weather}
      </p>
    </div>
  );
};
  
export default WeatherCard;