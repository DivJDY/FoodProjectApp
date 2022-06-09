import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Navigation from "./Navigation";
import FoodList from "./Components/FoodList";
import FoodTable from "./Components/FoodTable";

function App() {
  return (
    <div className="container">
      <Router>
        {/* Navigation */}
        <Navigation className="w-25" />
        <div className="w-75">
          <Routes>
            <Route path="/" element={<FoodList />} exact />
          </Routes>

          <Routes>
            <Route path="/foodTable" element={<FoodTable />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
