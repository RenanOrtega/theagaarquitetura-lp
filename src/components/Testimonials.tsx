import { useNavigate } from "react-router-dom";
// import client1 from "../assets/images/client-1.jpg";
// import client2 from "../assets/images/client-2.jpg";
// import client3 from "../assets/images/client-3.jpg";
// import client4 from "../assets/images/client-4.jpg";

function Testimonials() {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      name: "Mariana Santos",
      role: "Empresária",
      image: "client1",
      projectId: 1,
      text: "A Nathalia transformou completamente nossa casa. Ela não apenas criou um espaço lindo, mas entendeu exatamente o que nossa família precisava. Cada ambiente reflete nossa personalidade e trouxe uma paz que não sabíamos que era possível ter em casa.",
    },
    {
      id: 2,
      name: "Lucas & Ana Paula",
      role: "Casal",
      image: "client2",
      projectId: 2,
      text: "Trabalhar com a Nath foi uma experiência única. Ela conseguiu captar nossos sonhos e transformar em realidade. O conceito de arquitetura com alma fez toda a diferença - nossa casa agora é um verdadeiro refúgio de amor e harmonia.",
    },
    {
      id: 3,
      name: "Roberto Almeida",
      role: "Advogado",
      text: "Profissionalismo exemplar e resultado excepcional. A Nathalia criou um escritório que transmite seriedade e acolhimento ao mesmo tempo. Meus clientes sempre elogiam o ambiente, e eu me sinto mais produtivo e motivado trabalhando aqui.",
      image: "client3",
      projectId: 3,
    },
    {
      id: 4,
      name: "Camila Rodrigues",
      role: "Médica",
      text: "A sensibilidade da Nathalia em compreender meu estilo de vida e necessidades foi impressionante. Ela criou um lar que é funcional para minha rotina corrida, mas também um santuário para relaxar. É incrível como cada detalhe foi pensado com carinho.",
      image: "client4",
      projectId: 4,
    },
  ];

  const handleProjectAccess = (projectId: number) => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <section className="flex flex-col justify-center items-center bg-[var(--color-primary-bg)] pt-24">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-100 md:w-4xl h-px bg-[var(--color-primary-dark)] opacity-60"></div>
        <div className="w-50 md:w-2xl h-px bg-[var(--color-primary-dark)] opacity-60"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary-dark)] opacity-60 tracking-wider text-center">
          DEPOIMENTOS
        </h1>
        <span className="text-base md:text-lg text-[var(--color-primary-medium)] opacity-80 font-medium tracking-wide text-center">
          O que nossos clientes dizem sobre a experiência
        </span>
        <div className="w-full max-w-[30rem] h-0.5 bg-primary opacity-60"></div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 px-20 pb-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group bg-[var(--color-primary-bg)] p-8 shadow-[0_0_15px_rgba(0,0,0,0.25)] hover:shadow-[0_0_25px_rgba(0,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full rounded-2xl"
          >
            {/* Estrelas de avaliação */}
            <div className="flex items-center pb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[var(--color-primary-medium)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            {/* Quote */}
            <div className="min-h-[120px] mb-6">
              <span className="text-4xl text-secondary opacity-40 font-serif leading-none">
                "
              </span>
              <p className="text-lg text-[var(--color-primary-medium)] leading-relaxed mt-4">
                {testimonial.text}
              </p>
              <span className="text-4xl text-secondary opacity-40 font-serif leading-none float-right -mt-2">
                "
              </span>
            </div>

            {/* Client Info and Button */}
            <div className="border-t border-[var(--color-primary-medium)] pt-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                    {testimonial.image &&
                    testimonial.image !== "client1" &&
                    testimonial.image !== "client2" &&
                    testimonial.image !== "client3" &&
                    testimonial.image !== "client4" ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-10 h-10 text-[var(--color-primary-medium)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-primary-medium)] text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-[var(--color-primary-medium)] opacity-80 italic">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                {/* Access Project Button */}
                <button
                  onClick={() => handleProjectAccess(testimonial.projectId)}
                  className="bg-[var(--color-primary-medium)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform cursor-pointer"
                >
                  Acessar projeto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
