import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="max-w-7xl mx-auto  px-6">
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}

export default App;
