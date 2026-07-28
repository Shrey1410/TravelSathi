import {
    CalendarDays,
    Heart,
    MapPin,
    Share2,
    Wallet,
  } from "lucide-react";
  
  import type { Recommendation } from "../types/Recommendation" ;
  
  interface HeroProps {
    recommendation: Recommendation;
  }
  
  const HeroSection = ({ recommendation }: HeroProps) => {
    return (
      <section
        className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
  
        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
  
          <div className="flex justify-between items-end">
  
            <div>
  
              <p className="uppercase tracking-[4px] text-sm">
                AI Generated Travel Plan
              </p>
  
              <h1 className="text-6xl font-bold mt-2">
                {recommendation.destination}
              </h1>
  
              <div className="flex gap-8 mt-6">
  
                <div className="flex items-center gap-2">
                  <CalendarDays size={20} />
                  <span>
                    {recommendation.startDate} - {recommendation.endDate}
                  </span>
                </div>
  
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>{recommendation.duration}</span>
                </div>
  
                <div className="flex items-center gap-2">
                  <Wallet size={20} />
                  <span>{recommendation.budget}</span>
                </div>
  
              </div>
  
            </div>
  
            <div className="flex gap-4">
  
              <button className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition">
                <Heart />
              </button>
  
              <button className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition">
                <Share2 />
              </button>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default HeroSection;