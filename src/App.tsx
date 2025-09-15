import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Personal from "./components/Personal";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ProjectDetail from "./components/ProjectDetail";

function HomePage() {
  return (
    <div>
      <Hero />
      <div className="px-20">
        <Portfolio />
        <Personal />
      </div>
      <div className="pt-10">
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
