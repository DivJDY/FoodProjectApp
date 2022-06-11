import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import history from "./history";
import Navigation from "./Navigation";
import FoodList from "./Components/FoodList";
import FoodTable from "./Components/FoodTable";
import FoodDescription from "./Components/foodDescription";

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <Navigation className="w-25" />
        <div className="w-75">
          <Routes>
            <Route path="/" element={<FoodList />} exact />
          </Routes>

          <Routes>
            <Route path="/foodTable" element={<FoodTable />} exact />
          </Routes>
          <Routes>
            <Route path="/foodDesc" element={<FoodDescription />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
