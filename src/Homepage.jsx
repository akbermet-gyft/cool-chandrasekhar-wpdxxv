import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Importing styles

function Homepage() {
  // Scroll to the mission section when clicking the button
  const scrollToMission = () => {
    document
      .getElementById("mission-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Introduction Section */}
      <header className="header">
        <h1>Welcome to the Radio Telescope Project</h1>
        <p className="intro-text">
          Our radio telescope studies distant galaxies, stars, and other
          celestial objects by capturing electromagnetic signals in the radio
          frequency spectrum. We aim to unlock the mysteries of the universe
          through cutting-edge radio astronomy.
        </p>
      </header>

      {/* Navigation Links Section */}
      <div className="navigation">
        <button className="btn" onClick={scrollToMission}>
          📊 About the Project
        </button>
        <Link to="/reports" className="btn">
          📑 Materials
        </Link>
        <Link to="/about" className="btn">
          ℹ️ Getting Started
        </Link>
      </div>

      {/* Live Data Feed Section */}
      <section className="live-data">
        <h2>🌍 Our Radio Telescope</h2>
        <p>Data coming soon...</p>
      </section>

      {/* 🔹 Mission Section (Initially Hidden Until Scrolled) */}
      <section id="mission-section" className="mission">
        <h2>🚀 Our Mission</h2>
        <p>
          Our goal is to explore the universe by capturing radio signals from
          deep space. By analyzing these signals, we can learn about black
          holes, distant stars, and other cosmic phenomena.
        </p>
        <h2>🔬 Research Focus</h2>
        <p>
          We focus on studying cosmic microwave background radiation, pulsars,
          and signals from exoplanets that might indicate extraterrestrial life.
        </p>
      </section>
    </div>
  );
}

export default Homepage;
