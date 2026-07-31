import Navbar from "../components/Navbar";
import {
  Bot,
  Plane,
  Wallet,
  CloudSun,
  Backpack,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-3xl text-white p-10 lg:p-16 shadow-lg">

          <div className="max-w-3xl">

            <h1 className="text-5xl font-bold leading-tight">
              Travel Smarter with AI
            </h1>

            <p className="mt-6 text-lg text-blue-200 leading-8">
              TravelSathi is an AI-powered travel planning platform that
              generates personalized itineraries based on your destination,
              travel dates, and budget. Simply create your trip, and our AI
              creates a complete travel plan for you in seconds.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-5">
            About TravelSathi
          </h2>

          <p className="text-slate-600 leading-8">
            Planning a trip can be stressful. TravelSathi simplifies this
            process by using Artificial Intelligence to generate complete travel
            recommendations including day-wise itineraries, estimated budgets,
            weather information, packing suggestions, travel tips and emergency
            contacts.
          </p>

        </section>

        {/* Features */}

        <section>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Why Choose TravelSathi?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <FeatureCard
              icon={<Bot size={35} />}
              title="AI Trip Planner"
              description="Generate complete travel itineraries automatically using AI."
            />

            <FeatureCard
              icon={<Wallet size={35} />}
              title="Budget Planning"
              description="Smart budget estimation for hotels, food, transport and activities."
            />

            <FeatureCard
              icon={<CloudSun size={35} />}
              title="Weather Forecast"
              description="Know the expected weather before your journey."
            />

            <FeatureCard
              icon={<Backpack size={35} />}
              title="Packing Checklist"
              description="Get personalized packing suggestions for your destination."
            />

            <FeatureCard
              icon={<ShieldCheck size={35} />}
              title="Travel Safety"
              description="Emergency contacts and useful travel tips for every destination."
            />

            <FeatureCard
              icon={<Plane size={35} />}
              title="Day-wise Itinerary"
              description="Enjoy a well-organized schedule for every day of your trip."
            />

          </div>

        </section>

        {/* How it Works */}

        <section className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-3xl font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <Step number="1" title="Create Trip" />

            <Step number="2" title="AI Processing" />

            <Step number="3" title="Generate Plan" />

            <Step number="4" title="Start Exploring" />

          </div>

        </section>

        {/* Footer */}

        <section className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl text-white text-center p-12">

          <h2 className="text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Let TravelSathi create an intelligent travel plan that saves time,
            optimizes your budget and helps you enjoy unforgettable journeys.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
            Create Your First Trip
          </button>

        </section>

      </div>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => (
  <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">

    <div className="text-blue-600 mb-5">
      {icon}
    </div>

    <h3 className="text-xl font-semibold mb-3">
      {title}
    </h3>

    <p className="text-slate-600">
      {description}
    </p>

  </div>
);

type StepProps = {
  number: string;
  title: string;
};

const Step = ({ number, title }: StepProps) => (
  <div>

    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
      {number}
    </div>

    <h3 className="mt-4 text-lg font-semibold">
      {title}
    </h3>

  </div>
);

export default About;