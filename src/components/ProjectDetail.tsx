import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Square } from "lucide-react";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";
import bgProjectDetail from "../assets/images/bg-project-detail.png";
import logoTh from "../assets/images/logo-th.png";
import logoThFrame from "../assets/images/logo-th-frame.png";
import { useMediaQuery } from "react-responsive";

interface ProjectData {
  id: number;
  image: string;
  images: string[];
  title: string;
  description: string;
  details: string;
  area: string;
  location: string;
  client: string;
}

const projectsData: Record<string, ProjectData> = {
  "1": {
    id: 1,
    image: portfolio1,
    images: [portfolio1, portfolio2, portfolio3],
    title: "Eike e Bianca",
    description:
      "Projeto residencial moderno com foco em conforto e funcionalidade",
    details:
      "Este projeto foi desenvolvido para um jovem casal que buscava um ambiente moderno e aconchegante. O design priorizou a integração dos espaços sociais, criando um ambiente fluido entre sala de estar, jantar e cozinha. A paleta de cores neutras com toques de madeira natural traz warmth ao ambiente.",
    area: "120m²",
    location: "São Paulo, SP",
    client: "Eike e Bianca",
  },
  "2": {
    id: 2,
    image: portfolio2,
    images: [portfolio2, portfolio4, portfolio5],
    title: "Renan e Thais",
    description: "Design contemporâneo com elementos industriais",
    details:
      "Projeto desenvolvido para um casal jovem que desejava um ambiente sofisticado com toques industriais. O uso de materiais como concreto aparente, ferro e madeira criou um ambiente único e personalizado. A iluminação foi cuidadosamente planejada para destacar cada elemento do projeto.",
    area: "95m²",
    location: "Rio de Janeiro, RJ",
    client: "Renan e Thais",
  },
  "3": {
    id: 3,
    image: portfolio3,
    images: [portfolio3, portfolio1, portfolio6],
    title: "Escritório Contemporâneo",
    description: "Ambiente corporativo moderno e produtivo",
    details:
      "Escritório projetado para maximizar a produtividade e o bem-estar dos funcionários. O design aberto promove a colaboração, enquanto as áreas privativas garantem a concentração necessária. A escolha de materiais sustentáveis reflete os valores da empresa.",
    area: "200m²",
    location: "São Paulo, SP",
    client: "Empresa Tech",
  },
  "4": {
    id: 4,
    image: portfolio4,
    images: [portfolio4, portfolio2, portfolio1],
    title: "Quarto de Luxo Moderno",
    description: "Suite master com design luxuoso e aconchegante",
    details:
      "Este projeto de suite master combina luxo e conforto. O design minimalista com materiais nobres cria um ambiente relaxante e sofisticado. A iluminação indireta e a paleta de cores suaves contribuem para uma atmosfera tranquila e acolhedora.",
    area: "35m²",
    location: "Brasília, DF",
    client: "Família Silva",
  },
  "5": {
    id: 5,
    image: portfolio5,
    images: [portfolio5, portfolio3, portfolio4],
    title: "Cozinha Industrial Moderna",
    description: "Cozinha gourmet com elementos industriais",
    details:
      "Cozinha gourmet que combina funcionalidade e estilo industrial. O projeto integra equipamentos de alta performance com design moderno. Os materiais como aço inox, madeira e concreto criam um ambiente único e funcional para os amantes da culinária.",
    area: "45m²",
    location: "São Paulo, SP",
    client: "Chef Rodrigo",
  },
  "6": {
    id: 6,
    image: portfolio6,
    images: [portfolio6, portfolio5, portfolio2],
    title: "Banheiro Contemporâneo",
    description: "Design moderno com materiais nobres",
    details:
      "Banheiro contemporâneo que prioriza o bem-estar e relaxamento. O uso de mármore, madeira e metais cria uma atmosfera spa-like. A iluminação estratégica e o layout otimizado maximizam o conforto e a funcionalidade do espaço.",
    area: "20m²",
    location: "Rio de Janeiro, RJ",
    client: "Apartamento Leblon",
  },
};

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;
  const [selectedImage, setSelectedImage] = useState<string>("");
  const isLarge = useMediaQuery({ minWidth: 1024 }); // lg = 1024px

  useEffect(() => {
    if (project) {
      setSelectedImage(project.image);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-8">
            Projeto não encontrado
          </h1>
          <Link
            to="/"
            className="inline-flex items-center bg-[var(--color-primary-medium)] hover:bg-[var(--color-primary-dark)] text-white rounded-lg transition-colors gap-4 px-12 py-6"
          >
            <ArrowLeft size={20} />
            Voltar ao Portfolio
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "var(--gradient-light)",
        backgroundImage: isLarge ? `url(${bgProjectDetail})` : "none",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Header com navegação */}
      <header className="absolute top-0 left-0 right-0 z-20 p-12">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-6 px-8 py-6 text-[var(--color-primary-dark)] hover:text-[var(--color-primary-medium)] transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline font-medium">
              Voltar ao Portfolio
            </span>
          </Link>
        </div>
      </header>

      <div className="min-h-screen flex justify-center pt-32 pb-16">
        <div className="max-w-7xl lg:px-8 px-12">
          {/* Header do projeto - Mobile first, sempre no topo */}
          <div className="flex flex-col gap-4 mb-12 lg:hidden">
            <div className="inline-block bg-[var(--color-primary-medium)]/10 rounded-full px-6 py-2 w-fit">
              <span className="text-sm font-medium text-[var(--color-primary-medium)]">
                Projeto Residencial
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[var(--color-primary-dark)]">
              {project.title}
            </h1>

            <p className="text-xl text-[var(--color-primary-medium)] font-light italic">
              {project.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 items-center lg:gap-10 gap-2">
            {/* Lado direito - Conteúdo (Desktop) */}
            <div className="flex flex-col gap-5 lg:order-2">
              {/* Header do projeto - Desktop only */}
              <div className="hidden lg:flex flex-col gap-2">
                <div className="inline-block bg-[var(--color-primary-medium)]/10 rounded-full px-6 py-2 w-fit">
                  <span className="text-sm font-medium text-[var(--color-primary-medium)]">
                    Projeto Residencial
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] leading-tight">
                  {project.title}
                </h1>

                <p className="text-xl text-[var(--color-primary-medium)] font-light italic">
                  {project.description}
                </p>
              </div>

              {/* Informações do projeto - Desktop only */}
              <div className="hidden lg:grid grid-cols-2 gap-12">
                <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-xl gap-6 p-8">
                  <div className="bg-[var(--color-primary-medium)]/10 rounded-lg p-4">
                    <Square
                      size={18}
                      className="text-[var(--color-primary-medium)]"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-primary-dark)]/70">
                      Área
                    </p>
                    <p className="font-semibold text-[var(--color-primary-dark)]">
                      {project.area}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-xl w-full gap-6 p-8">
                  <div className="bg-[var(--color-primary-medium)]/10 rounded-lg p-4">
                    <MapPin
                      size={18}
                      className="text-[var(--color-primary-medium)]"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-primary-dark)]/70">
                      Localização
                    </p>
                    <p className="font-semibold text-[var(--color-primary-dark)]">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Descrição detalhada - Desktop only */}
              <div className="hidden lg:block">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[var(--color-primary-dark)] leading-relaxed text-lg">
                    {project.details}
                  </p>

                  <p className="text-[var(--color-primary-dark)] leading-relaxed text-lg">
                    Mais do que uma casa, este projeto representa o lar sonhado
                    por{" "}
                    <span className="font-semibold text-[var(--color-primary-medium)]">
                      {project.client}
                    </span>
                    , um espaço que traduz sua história, seus valores e o desejo
                    de viver cada momento com leveza e autenticidade.
                  </p>
                </div>

                {/* Call to action */}
                <div className="pt-5 text-right">
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Olá! Vi o projeto ${project.title} no seu portfólio e adorei! Gostaria de conversar sobre um projeto similar.`
                      );
                      const phoneNumber = "5511994696897";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className="group relative inline-flex items-center bg-[var(--color-primary-medium)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer gap-6 px-8 py-4"
                  >
                    <span>Criar projeto</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>

                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Imagens */}
            <div className="lg:order-1">
              {/* Imagem principal */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Galeria secundária */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                      selectedImage === image
                        ? "ring-4 ring-[var(--color-primary-medium)] ring-opacity-60 transform scale-105"
                        : "hover:ring-2 hover:ring-[var(--color-primary-medium)] hover:ring-opacity-40"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Vista ${index + 1}`}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo abaixo das imagens - Mobile only */}
          <div className="lg:hidden">
            {/* Informações do projeto */}
            <div className="grid grid-cols-2 gap-8 py-6">
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-xl gap-4 p-6">
                <div className="bg-[var(--color-primary-medium)]/10 rounded-lg p-3">
                  <Square
                    size={16}
                    className="text-[var(--color-primary-medium)]"
                  />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-primary-dark)]/70">
                    Área
                  </p>
                  <p className="font-semibold text-[var(--color-primary-dark)] text-sm">
                    {project.area}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-xl gap-4 p-6">
                <div className="bg-[var(--color-primary-medium)]/10 rounded-lg p-3">
                  <MapPin
                    size={16}
                    className="text-[var(--color-primary-medium)]"
                  />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-primary-dark)]/70">
                    Localização
                  </p>
                  <p className="font-semibold text-[var(--color-primary-dark)] text-sm">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Descrição detalhada */}
            <div className="prose prose-lg max-w-none">
              <p className="text-[var(--color-primary-dark)] leading-relaxed">
                {project.details}
              </p>

              <p className="text-[var(--color-primary-dark)] leading-relaxed">
                Mais do que uma casa, este projeto representa o lar sonhado por{" "}
                <span className="font-semibold text-[var(--color-primary-medium)]">
                  {project.client}
                </span>
                , um espaço que traduz sua história, seus valores e o desejo de
                viver cada momento com leveza e autenticidade.
              </p>
            </div>

            {/* Call to action */}
            <div className="pt-8">
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `Olá! Vi o projeto ${project.title} no seu portfólio e adorei! Gostaria de conversar sobre um projeto similar.`
                  );
                  const phoneNumber = "5511994696897";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="group relative inline-flex items-center bg-[var(--color-primary-medium)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer gap-4 px-12 py-6 w-full justify-center"
              >
                <span>Criar projeto similar</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>

                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo - Mobile/Medium: superior direito, Large: inferior esquerdo */}
      {isLarge ? (
        <img
          src={logoTh}
          alt="Theaga Logo"
          className="absolute h-16 z-10 top-12 right-12 lg:top-auto lg:right-auto lg:bottom-12 lg:left-12"
        />
      ) : (
        <img
          src={logoThFrame}
          alt="Theaga Logo Moldura"
          className="absolute h-16 z-9 top-12 right-12 lg:top-auto lg:right-auto lg:bottom-12 lg:left-12"
        />
      )}
      {/* <img
        src={logoTh}
        alt="Theaga Logo"
        className="absolute h-16 z-10 top-12 right-12 lg:top-auto lg:right-auto lg:bottom-12 lg:left-12"
      /> */}
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 w-32 h-32 bg-[var(--color-primary-medium)]/5 rounded-full blur-3xl right-16"></div>
      <div className="absolute bottom-1/4 w-40 h-40 bg-[var(--color-primary-dark)]/5 rounded-full blur-3xl left-16"></div>
    </div>
  );
}

export default ProjectDetail;
