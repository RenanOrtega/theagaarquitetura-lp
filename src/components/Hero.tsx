// import bgHero from "../assets/images/bg-hero.png";
import bgHero from "../assets/images/portfolio-1.jpg";
import teagaLogo from "../assets/images/teaga-logo.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Filtro sobre o background */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(137, 73, 0, 0.4)" }}
      ></div>

      {/* Logo no canto superior direito */}
      <div className="absolute top-8 right-8 z-10">
        <img
          src={teagaLogo}
          alt="Teaga Arquitetura"
          className="h-16 md:h-20 w-auto"
        />
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider">
          CONSTRUINDO SEUS SONHOS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-light">
          Traduzir histórias, desejos e emoções em ambientes com pertencimento
        </p>
      </div>
    </section>
  );
}
