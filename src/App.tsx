import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Personal from "./components/Personal";
import Portfolio from "./components/Portfolio";
import ArchitecturalPortfolio from "./components/ArchitecturalPortfolio";
import Testimonials from "./components/Testimonials";
import ProjectDetail from "./components/ProjectDetail";

function HomePage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Implementar mensagem de contato");
    const phoneNumber = "5511994696897"; // Substitua pelo número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <Hero />
      <div className="px-20">
        <Portfolio />
        <ArchitecturalPortfolio />
        <div className="flex justify-center pb-20">
          <button
            onClick={handleWhatsAppContact}
            className="bg-[var(--color-primary-medium)] hover:bg-[var(--color-accent-dark)] px-10 py-5 cursor-pointer transition-colors duration-300 rounded-2xl"
          >
            <span className="font-bold text-white">Entre em contato</span>
          </button>
        </div>
        <Personal />
      </div>
      <div className="pt-16">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projeto/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
