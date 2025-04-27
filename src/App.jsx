import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import FeatureCards from "./sections/featureCards/FeatureCards";
import Experience from "./sections/experience/Experience";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/Footer";
import WindowSizeProvider from "./contexts/WindowSizeProvider";
import LazySection from "./components/LazySection";

const App = () => {
  return (
    // added window size provider
    <WindowSizeProvider>
      <main className="max-w-7xl mx-auto overflow-hidden">
        <Navbar />
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <FeatureCards />
        </LazySection>
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
        <LazySection>
          <Footer />
        </LazySection>
      </main>
    </WindowSizeProvider>
  );
};

export default App;
