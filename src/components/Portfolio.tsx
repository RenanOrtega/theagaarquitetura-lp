import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";
import { SectionTitle, Tab, TabGroup } from "./ui";

type ProjectCategory = "Residencial" | "Comercial" | "Institucional" | "Outros";

interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  category: ProjectCategory;
}

function Portfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Residencial");

  const portfolioItems: PortfolioItem[] = [
    { id: 1, image: portfolio1, alt: "Eike e Bianca", category: "Residencial" },
    { id: 2, image: portfolio2, alt: "Renan e Thais", category: "Residencial" },
    {
      id: 3,
      image: portfolio3,
      alt: "Escritório Corporativo",
      category: "Comercial",
    },
    {
      id: 4,
      image: portfolio4,
      alt: "Suite Master de Luxo",
      category: "Residencial",
    },
    {
      id: 5,
      image: portfolio5,
      alt: "Cozinha Gourmet Industrial",
      category: "Comercial",
    },
    { id: 6, image: portfolio6, alt: "Spa Contemporâneo", category: "Outros" },
    { id: 7, image: portfolio6, alt: "Spa Contemporâneo", category: "Outros" },
    { id: 8, image: portfolio6, alt: "Spa Contemporâneo", category: "Outros" },
    { id: 9, image: portfolio3, alt: "Renan e Thais", category: "Residencial" },
    {
      id: 10,
      image: portfolio5,
      alt: "Renan e Thais",
      category: "Institucional",
    },
    {
      id: 11,
      image: portfolio6,
      alt: "Renan e Thais",
      category: "Institucional",
    },
  ];

  const categories: ProjectCategory[] = [
    "Residencial",
    "Comercial",
    "Institucional",
    "Outros",
  ];

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeTab
  );

  // Função para determinar quantos projetos mostrar baseado no breakpoint
  const getItemsToShow = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 3 : filteredItems.length; // 3 no mobile, todos nos outros
    }
    return filteredItems.length;
  }, [filteredItems.length]);

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow);

  // Atualizar quantidade de itens quando redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredItems.length, getItemsToShow]);

  const displayedItems = filteredItems.slice(0, itemsToShow);

  const handleProjectClick = (projectId: number) => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <section className="min-h-screen pt-24">
      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="INTERIORES"
          subtitle="Projetos de design de interiores"
          showDivider={false}
        />
      </div>

      <TabGroup>
        {categories.map((category) => (
          <Tab
            key={category}
            label={category}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </TabGroup>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 pb-8 gap-2 px-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transform transition-all duration-300 relative"
            onClick={() => handleProjectClick(item.id)}
          >
            <div className="aspect-[4/3] md:aspect-[6/3] overflow-hidden shadow-2xl relative rounded-2xl bg-white">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover filter transition-all duration-300 rounded-2xl group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay com gradiente diferente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-medium)] via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-300 rounded-2xl">
                <div className="text-center p-4 md:p-6">
                  <span className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg block mb-2 md:mb-4">
                    {item.alt}
                  </span>
                  <span className="text-white text-xs md:text-sm opacity-90 font-medium">
                    Ver projeto completo
                  </span>
                </div>
              </div>

              {/* Badge de categoria */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[var(--color-primary-medium)] text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
