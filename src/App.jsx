import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import FeatureCards from "./sections/featureCards/FeatureCards";
import Experience from "./sections/experience/Experience";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <FeatureCards />
      <Experience />
      <div className="h-96"></div>
    </main>
  );
};

export default App;
