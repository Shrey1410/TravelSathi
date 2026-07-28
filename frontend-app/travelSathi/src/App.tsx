import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import PlanPage from "./pages/PlanPage"
import RecommendationPage from "./pages/RecommendationPage"
import TripsPage from "./pages/TripPage"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/plan" element={<PlanPage/>}/>
      <Route path="/recommendation" element={<RecommendationPage/>}/>
      <Route path="/trips" element={<TripsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  )
}

export default App
