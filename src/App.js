import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"; // Import Homepage component
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/data"
          element={<h1 className="page">📊 About the Project</h1>}
        />
        <Route
          path="/reports"
          element={<h1 className="page">📑 Materials</h1>}
        />
        <Route
          path="/about"
          element={<h1 className="page">ℹ️ Getting Started</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
