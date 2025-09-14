import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Personal from "./components/Personal";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
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
      <div className="">
        <Footer />
      </div>
      {/* <Skills /> */}
    </div>
  );
}

export default App;
