import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"
import { toast } from "sonner";

const Navbar = () => {

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  // When the user clicks the Logout button then this function is invoked
  const handleLogout = async () =>{
    try {
      await signOut(auth);
      toast.success("Logout successful!")
    } catch (error) {
      toast.error("Error while Logout!");
      console.error(error);
    }
  }
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center text-lg font-bold">
            T
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Travel<span className="text-blue-700">Sathi</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-700 transition-colors duration-200">
            Home
          </Link>
          <Link to="/plan" className="hover:text-blue-700 transition-colors duration-200">
            Plan
          </Link>
          <Link to="/about" className="hover:text-blue-700 transition-colors duration-200">
            About Us
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/trips" className="px-5 py-2 rounded-lg border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 font-medium">
            Check your Trips
          </Link>
          {!isLoggedIn ? <Link to="/login" className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium">
            Login
          </Link> :
          <button onClick={(e) => {
            e.preventDefault()
            handleLogout()
          }} className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium">
            Logout
          </button>
          }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;