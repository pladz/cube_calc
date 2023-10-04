import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPage";
import MainStatsEqui from "./components/statEquivalent/mainStatsEqui";
import ShouldITodd from "./components/shouldITodd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cube_calc" element={<MainPage />} />
        {/* <Route path="/stats_calc" element={<MainStatsEqui />} /> */}
        {/* <Route path="/todd_calc" element={<ShouldITodd />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
