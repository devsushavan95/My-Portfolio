import { createContext, useState } from "react";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import WorkSection from "./components/sections/WorkSection.jsx";
import ExpSection from "./components/sections/ExpSection.jsx";
import ToolSection from "./components/sections/ToolSection.jsx";

export const animContext = createContext(null);

function App() {
  const initialFadeInState = { opacity: 0, y: 20 };
  const finalFadeInState = { opacity: 1, y: 0 };

  return (
    <animContext.Provider value={{ initial: initialFadeInState, final: finalFadeInState }}>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <ExpSection />
        <ToolSection />
      </main>
      <Footer />
    </animContext.Provider>
  );
}

export default App;
