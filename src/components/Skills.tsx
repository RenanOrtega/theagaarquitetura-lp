import { Home, Palette, Lightbulb, Ruler, Users, Eye } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Planejamento de Espaços",
      description:
        "Projetos pensados para aproveitar cada metro de forma inteligente e funcional.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "Harmonização de Cores",
      description:
        "Criação de paletas que refletem personalidade e transmitem as sensações desejadas.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Design de Iluminação",
      description:
        "Projetos luminotécnicos que valorizam ambientes e criam atmosferas únicas.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Seleção de Materiais",
      description:
        "Escolha criteriosa de acabamentos que aliam beleza, durabilidade e sustentabilidade.",
      icon: <Ruler className="w-8 h-8" />,
    },
    {
      title: "Consultoria Personalizada",
      description:
        "Atendimento dedicado para compreender e transformar sonhos em realidade.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Conceito Visual",
      description:
        "Desenvolvimento de identidade visual única para cada projeto e cliente.",
      icon: <Eye className="w-8 h-8" />,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-10">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h1 className="text-6xl font-bold text-[#894900] opacity-60 tracking-wider">
            HABILIDADES
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experiência em desenvolver projetos criativos e funcionais, unindo
            estética e praticidade. Especialização em planejamento de espaços,
            escolha de materiais, harmonização de cores e iluminação.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-[#894900]/20 shadow-md p-8 flex flex-col items-start gap-4 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="p-3 rounded-full border border-[#894900]/30 text-[#894900]">
                {skill.icon}
              </div>
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
