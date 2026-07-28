import React from "react";
import Navbar from "../components/Navbar";

const PlanPage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Tell us about your Trip
          </h1>
          <form className="space-y-6">
            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Budget & Travelers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Budget
                </label>
                <input
                  type="number"
                  placeholder="₹50,000"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="2"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Additional Preferences */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Additional Preferences
              </label>
              <textarea
                rows={4}
                placeholder="Tell us anything else you'd like us to know..."
                className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Generate Trip Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;