import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Plan from "./pages/Plan"
import RecommendationPage from "./pages/RecommendationPage"
import TripsPage from "./pages/TripPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/plan" element={<Plan/>}/>
      <Route path="/recommendation" element={<RecommendationPage/>}/>
      <Route path="/trips" element={<TripsPage/>}/>
    </Routes>
  )
}

export default App
