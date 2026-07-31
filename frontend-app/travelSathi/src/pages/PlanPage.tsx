import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
interface TripFormData {
  source: string;
  destination: string;
  startDate: string;
  endDate: string;
  numberOfTravelers: string;
  additionalPreference: string;
}

const initialState: TripFormData = {
  source: "",
  destination: "",
  startDate: "",
  endDate: "",
  numberOfTravelers: "",
  additionalPreference: "",
};

const PlanPage = () => {
  const [formData, setFormData] = useState<TripFormData>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): string | null => {
    if (!formData.destination.trim()) return "Please enter a destination.";
    if (!formData.startDate || !formData.endDate)
      return "Please select both start and end dates.";
    if (new Date(formData.endDate) < new Date(formData.startDate))
      return "End date can't be before start date.";
    if (
      formData.numberOfTravelers &&
      Number(formData.numberOfTravelers) < 1
    )
      return "Number of travelers must be at least 1.";
    return null;
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setIsSubmitting(true);
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("User is not authenticated.");
      navigate("/login");
      return;
    }
    const idToken = await user.getIdToken();
    try {
      const payload = {
        userId : user.uid,
        source: formData.source || null,
        destination: formData.destination,
        startDate: formData.startDate,
        endDate: formData.endDate,
        numberOfTravelers: formData.numberOfTravelers
          ? Number(formData.numberOfTravelers)
          : null,
        additionalPreference: formData.additionalPreference || null,
      };

      const res = await axios.post(
        "http://localhost:8005/api/v1/trips",
        payload,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      )
      console.log(res);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Tell us about your Trip
          </h1>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Source & Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Traveling From
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="Your starting city"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Where do you want to go?"
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Number of Travelers
              </label>
              <input
                type="number"
                name="numberOfTravelers"
                value={formData.numberOfTravelers}
                onChange={handleChange}
                min="1"
                placeholder="2"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Additional Preferences */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Additional Preferences
              </label>
              <textarea
                name="additionalPreference"
                value={formData.additionalPreference}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us anything else you'd like us to know..."
                className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg transition"
            >
              {isSubmitting ? "Generating..." : "Generate Trip Plan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;