import nath from "../assets/images/nath.png";
// import nathOrganic from "../assets/images/nath-organic.png";
import nathSquare from "../assets/images/nath-square.png";
import InstagramIcon from "../assets/svg/instagram";

export default function Personal() {
  return (
    <section className="flex flex-col md:flex-row gap-8">
      {/* Lado da imagem */}
      <div className="flex-1 max-w-120">
        <img
          src={nathSquare}
          alt="Nathalia Leme"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Lado do texto */}
      <div className="flex flex-col flex-1">
        <div className="text-[var(--color-primary-dark)] text-center md:text-right flex-1">
          <h3 className="text-3xl font-semibold">Sobre Nathalia Leme</h3>
          <p className="text-2xl leading-9">
            Sou arquiteta especializada em Psicoarquitetura e meu propósito é
            transformar ambientes em espaços de pertencimento e acolhimento.
            Acredito que cada projeto deve refletir a essência de quem habita,
            indo muito além das tendências. Antes de definir cores ou formas,
            busco compreender sentimentos, histórias e a vida que cada pessoa
            deseja viver.
          </p>
          <p className="text-2xl leading-9 pt-6">
            Desenvolvi o conceito de arquitetura com alma, que une psicologia,
            estética e praticidade para criar ambientes únicos, capazes de
            organizar o caos, acolher e até exercer um papel terapêutico. Meu
            trabalho é dar forma ao invisível, traduzindo quem você é em espaços
            verdadeiros e cheios de significado.
          </p>
        </div>
        <div className="flex justify-center md:justify-end pt-5">
          <a
            href="https://www.instagram.com/arquitetanath/#"
            target="_blank"
            className="w-70 h-15 bg-[var(--color-primary-medium)] border border-[var(--color-border-light)] flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md rounded-2xl gap-8 group hover:scale-105 hover:-translate-y-1"
          >
            <div className="relative">
              <InstagramIcon
                className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                fill="white"
              />
              <img
                src={nath}
                alt="Nathalia"
                className="w-10 h-10 rounded-full object-cover absolute top-1 left-8 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-1"
              />
            </div>
            <span className="text-white font-bold transition-all duration-300">
              Siga no Instagram!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
