import logo from "./logo.svg";
import "./App.css";
import * as spacexApi from "./lib/spacex-api";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Crews from "./pages/crews/crews";
import CrewDetails from "./pages/crews/crew-details";
import Launches from "./pages/launches/launches";
import LaunchDetails from "./pages/launches/launch-details";
import Rockets from "./pages/rockets/rockets";
import RocketDetails from "./pages/rockets/rocket-details";
import Company from "./pages/company";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crews" element={<Crews />} />
        <Route path="/crew-details/:id" element={<CrewDetails />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launch-details/:id" element={<LaunchDetails />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rocket-details/:id" element={<RocketDetails />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
