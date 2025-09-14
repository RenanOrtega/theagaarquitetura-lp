import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";

function Portfolio() {
  const portfolioItems = [
    { id: 1, image: portfolio1, alt: "Eike e Bianca" },
    { id: 2, image: portfolio2, alt: "Renan e Thais" },
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
      className="min-h-screen pt-10"
    >
      {/* Title Section */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-6xl font-bold text-[#894900] opacity-60 tracking-wider">
            PORTFÓLIO
          </h1>
          <span className="text-lg text-[#B26F3D] opacity-80 font-medium tracking-wide">Projetos recentes de arquitetura e interiores</span>
          <div className="w-full max-w-120 h-0.5 bg-[#894900] opacity-60"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform transition-all duration-300 relative"
            >
              <div className="aspect-[6/3] overflow-hidden shadow-xl relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover filter transition-all duration-300"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center transition-all duration-300">
                  <span className="text-white text-xl font-semibold text-center px-4 drop-shadow-lg">{item.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Portfolio;
