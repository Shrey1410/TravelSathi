import React from "react";
import Navbar from "../components/Navbar";
import image2 from "../assets/image2.jpg";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Plan Your Dream Trip
              <span className="text-blue-700"> with TravelSathi</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
              Fast-track your travel planning with{" "}
              <span className="font-semibold">TravelSathi</span>. Get
              personalized itineraries, discover destinations, estimate budgets,
              and enjoy hassle free travel—all powered by AI.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/plan" className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
                Plan My Trip
              </Link>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={image2}
              alt="Travel Illustration"
              className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;