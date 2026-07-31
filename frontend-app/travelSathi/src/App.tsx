import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import PlanPage from "./pages/PlanPage"
import RecommendationPage from "./pages/RecommendationPage"
import TripsPage from "./pages/TripPage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import CompleteProfilePage from "./pages/CompleteProfile"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { login, logout } from "./store/authSlice"
import { auth } from "./firebase/firebase"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            isLoggedIn : true,
            user : {
              providerId: user.uid,
              email: user.email
            }
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/plan" element={<PlanPage/>}/>
      <Route path="/recommendation/:tripId" element={<RecommendationPage/>}/>
      <Route path="/trips" element={<TripsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/complete-profile" element={<CompleteProfilePage/>}/>
    </Routes>
  )
}

export default App
