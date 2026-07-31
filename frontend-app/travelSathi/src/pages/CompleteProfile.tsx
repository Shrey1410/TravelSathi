import { useEffect, useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { toast } from "sonner";

export default function CompleteProfilePage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ( e: SubmitEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      toast.error("Please provide the FirstName and LastName properly.")
      return;
    }
    try {
      setLoading(true);
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
        return;
      }
      const idToken = await user.getIdToken();
      await axios.post(
        "http://localhost:8005/api/v1/users",
        {
          email : user.email,
          firstName : firstName,
          lastName : lastName,
          providerId : user.uid
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      navigate("/");
      toast.success("User Profile created successfully!")
    } catch (error) {
      toast.error("Error while creating user profile!")
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      navigate("/login");
      return;
    }
    else{
      navigate("/")
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-2">
          Complete Your Profile
        </h1>
        <p className="text-sm text-slate-500 text-center mb-6">
          Tell us a little about yourself.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              placeholder="John"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              placeholder="Doe"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 text-white py-2.5 hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}