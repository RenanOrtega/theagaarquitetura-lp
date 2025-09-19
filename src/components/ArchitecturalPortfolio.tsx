import { useNavigate } from "react-router-dom";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";
import { useCallback, useEffect, useState } from "react";
import { SectionTitle, Tab, TabGroup } from "./ui";

type ProjectCategory = "Casas" | "Edificios";

interface ArchitecturalProject {
  id: number;
  image: string;
  alt: string;
  category: ProjectCategory;
}

function ArchitecturalPortfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Casas");

  const architecturalProjects: ArchitecturalProject[] = [
    {
      id: 101,
      image: portfolio2,
      alt: "Casa Moderna Minimalista",
      category: "Casas",
    },
    {
      id: 102,
      image: portfolio4,
      alt: "Residência Contemporânea",
      category: "Edificios",
    },
    {
      id: 103,
      image: portfolio6,
      alt: "Edifício Comercial Sustentável",
      category: "Casas",
    },
    {
      id: 104,
      image: portfolio1,
      alt: "Villa de Campo",
      category: "Edificios",
    },
    {
      id: 105,
      image: portfolio3,
      alt: "Complexo Residencial",
      category: "Casas",
    },
    {
      id: 106,
      image: portfolio5,
      alt: "Centro Cultural",
      category: "Edificios",
    },
    {
      id: 107,
      image: portfolio5,
      alt: "Centro Cultural",
      category: "Edificios",
    },
    {
      id: 110,
      image: portfolio3,
      alt: "Complexo Residencial",
      category: "Casas",
    },
  ];

  const categories: ProjectCategory[] = ["Casas", "Edificios"];

  const filteredItems = architecturalProjects.filter(
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
    <section className="pt-24">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="ARQUITETURA"
          subtitle="Projetos arquitetônicos completos"
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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 pb-8 gap-2">
        {displayedItems.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer transform transition-all duration-300 relative"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="aspect-[4/3] md:aspect-[6/3] overflow-hidden shadow-2xl relative rounded-2xl bg-white">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover filter transition-all duration-300 rounded-2xl group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay com gradiente diferente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-medium)] via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-300 rounded-2xl">
                <div className="text-center p-4 md:p-6">
                  <span className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg block mb-2 md:mb-4">
                    {project.alt}
                  </span>
                  <span className="text-white text-xs md:text-sm opacity-90 font-medium">
                    Ver projeto completo
                  </span>
                </div>
              </div>

              {/* Badge de categoria */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[var(--color-primary-medium)] text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.category.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArchitecturalPortfolio;
