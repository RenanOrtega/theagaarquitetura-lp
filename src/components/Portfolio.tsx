import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";
import bgPortfolio from "../assets/bg-portfolio.png";

function Portfolio() {
  const portfolioItems = [
    { id: 1, image: portfolio1, alt: "Modern architectural interior design" },
    { id: 2, image: portfolio2, alt: "Glass house exterior with steel frame" },
    { id: 3, image: portfolio3, alt: "Contemporary office interior design" },
    { id: 4, image: portfolio4, alt: "Luxury modern bedroom interior" },
    {
      id: 5,
      image: portfolio5,
      alt: "Modern kitchen with industrial elements",
    },
    { id: 6, image: portfolio6, alt: "Contemporary bathroom interior" },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgPortfolio})` }}
    >
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center gap-4 pt-30">
        <h1 className="text-6xl font-bold text-white tracking-wider">
          PORTFÓLIO
        </h1>
        <div className="w-full max-w-120 h-0.5 bg-white opacity-60"></div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full mb-16 pt-35 pb-5">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[6/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <button className="bg-[#B26F3D] hover:bg-amber-800 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
          Entrar em contato
        </button>

        <div className="w-full max-w-4xl h-0.5 bg-[#894900] opacity-60"></div>
        <div className="w-full max-w-2xl h-0.5 bg-[#894900] opacity-60"></div>
      </div>
    </section>
  );
}

export default Portfolio;
