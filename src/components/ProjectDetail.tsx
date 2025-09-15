import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Square } from "lucide-react";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";
import bgProjectDetail from "../assets/images/bg-project-detail.png";
import logoTh from "../assets/images/logo-th.png";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  description: string;
  details: string;
  area: string;
  location: string;
  year: string;
  client: string;
}

const projectsData: Record<string, ProjectData> = {
  "1": {
    id: 1,
    image: portfolio1,
    title: "Eike e Bianca",
    description:
      "Projeto residencial moderno com foco em conforto e funcionalidade",
    details:
      "Este projeto foi desenvolvido para um jovem casal que buscava um ambiente moderno e aconchegante. O design priorizou a integração dos espaços sociais, criando um ambiente fluido entre sala de estar, jantar e cozinha. A paleta de cores neutras com toques de madeira natural traz warmth ao ambiente.",
    area: "120m²",
    location: "São Paulo, SP",
    year: "2024",
    client: "Eike e Bianca",
  },
  "2": {
    id: 2,
    image: portfolio2,
    title: "Renan e Thais",
    description: "Design contemporâneo com elementos industriais",
    details:
      "Projeto desenvolvido para um casal jovem que desejava um ambiente sofisticado com toques industriais. O uso de materiais como concreto aparente, ferro e madeira criou um ambiente único e personalizado. A iluminação foi cuidadosamente planejada para destacar cada elemento do projeto.",
    area: "95m²",
    location: "Rio de Janeiro, RJ",
    year: "2024",
    client: "Renan e Thais",
  },
  "3": {
    id: 3,
    image: portfolio3,
    title: "Escritório Contemporâneo",
    description: "Ambiente corporativo moderno e produtivo",
    details:
      "Escritório projetado para maximizar a produtividade e o bem-estar dos funcionários. O design aberto promove a colaboração, enquanto as áreas privativas garantem a concentração necessária. A escolha de materiais sustentáveis reflete os valores da empresa.",
    area: "200m²",
    location: "São Paulo, SP",
    year: "2023",
    client: "Empresa Tech",
  },
  "4": {
    id: 4,
    image: portfolio4,
    title: "Quarto de Luxo Moderno",
    description: "Suite master com design luxuoso e aconchegante",
    details:
      "Este projeto de suite master combina luxo e conforto. O design minimalista com materiais nobres cria um ambiente relaxante e sofisticado. A iluminação indireta e a paleta de cores suaves contribuem para uma atmosfera tranquila e acolhedora.",
    area: "35m²",
    location: "Brasília, DF",
    year: "2023",
    client: "Família Silva",
  },
  "5": {
    id: 5,
    image: portfolio5,
    title: "Cozinha Industrial Moderna",
    description: "Cozinha gourmet com elementos industriais",
    details:
      "Cozinha gourmet que combina funcionalidade e estilo industrial. O projeto integra equipamentos de alta performance com design moderno. Os materiais como aço inox, madeira e concreto criam um ambiente único e funcional para os amantes da culinária.",
    area: "45m²",
    location: "São Paulo, SP",
    year: "2023",
    client: "Chef Rodrigo",
  },
  "6": {
    id: 6,
    image: portfolio6,
    title: "Banheiro Contemporâneo",
    description: "Design moderno com materiais nobres",
    details:
      "Banheiro contemporâneo que prioriza o bem-estar e relaxamento. O uso de mármore, madeira e metais cria uma atmosfera spa-like. A iluminação estratégica e o layout otimizado maximizam o conforto e a funcionalidade do espaço.",
    area: "20m²",
    location: "Rio de Janeiro, RJ",
    year: "2024",
    client: "Apartamento Leblon",
  },
};

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#894900] mb-4">
            Projeto não encontrado
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#B26F3D] hover:bg-[#894900] text-white px-6 py-3 rounded-lg transition-colors"
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
        background: "linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 100%)",
        backgroundImage: `url(${bgProjectDetail})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Header com navegação */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-[#894900] hover:text-[#B26F3D] transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline font-medium">
              Voltar ao Portfolio
            </span>
          </Link>
        </div>
      </header>

      <div className="min-h-screen flex justify-center pt-20 pb-8">
        <div className="max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Galeria secundária */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} - Vista 2`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} - Vista 3`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              {/* Imagem principal */}
            </div>

            {/* Lado direito - Conteúdo */}
            <div className="space-y-8">
              {/* Header do projeto */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#B26F3D]/10 rounded-full">
                  <span className="text-sm font-medium text-[#B26F3D]">
                    Projeto Residencial
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-[#894900] leading-tight">
                  {project.title}
                </h1>

                <p className="text-xl text-[#B26F3D] font-light italic">
                  {project.description}
                </p>
              </div>

              {/* Informações do projeto */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="p-2 bg-[#B26F3D]/10 rounded-lg">
                    <Square size={18} className="text-[#B26F3D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#894900]/70">Área</p>
                    <p className="font-semibold text-[#894900]">
                      {project.area}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="p-2 bg-[#B26F3D]/10 rounded-lg">
                    <Calendar size={18} className="text-[#B26F3D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#894900]/70">Ano</p>
                    <p className="font-semibold text-[#894900]">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl w-full">
                  <div className="p-2 bg-[#B26F3D]/10 rounded-lg">
                    <MapPin size={18} className="text-[#B26F3D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#894900]/70">Localização</p>
                    <p className="font-semibold text-[#894900]">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Descrição detalhada */}
              <div className="pt-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#894900] leading-relaxed text-lg">
                    {project.details}
                  </p>

                  <p className="text-[#894900] leading-relaxed text-lg">
                    Ma className=""is do que uma casa, este projeto representa o
                    lar sonhado por{" "}
                    <span className="font-semibold text-[#B26F3D]">
                      {project.client}
                    </span>
                    , um espaço que traduz sua história, seus valores e o desejo
                    de viver cada momento com leveza e autenticidade.
                  </p>
                </div>

                {/* Call to action */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Olá! Vi o projeto ${project.title} no seu portfólio e adorei! Gostaria de conversar sobre um projeto similar.`
                      );
                      const phoneNumber = "5511994696897";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className="group relative inline-flex items-center gap-3 bg-[#B26F3D] hover:bg-[#894900] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                  >
                    <span>Criar projeto similar</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>

                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo no canto inferior esquerdo */}
      <img
        src={logoTh}
        alt="Theaga Logo"
        className="absolute bottom-6 left-6 h-16 z-10"
      />

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-8 w-32 h-32 bg-[#B26F3D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-8 w-40 h-40 bg-[#894900]/5 rounded-full blur-3xl"></div>
    </div>
  );
}

export default ProjectDetail;
