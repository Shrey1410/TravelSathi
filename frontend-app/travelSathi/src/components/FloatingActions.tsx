import {
    Download,
    Heart,
    Share2,
    Map
  } from "lucide-react";
  
  const FloatingActions = () => {
    return (
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
  
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition">
          <Heart />
        </button>
  
        <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition">
          <Map />
        </button>
  
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-xl transition">
          <Share2 />
        </button>
  
        <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl transition">
          <Download />
        </button>
  
      </div>
    );
  };
  
  export default FloatingActions;