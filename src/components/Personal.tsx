import nath from "../assets/images/nath.png";
// import nathOrganic from "../assets/images/nath-organic.png";
import nathSquare from "../assets/images/nath-square.png";
import InstagramIcon from "../assets/svg/instagram";

export default function Personal() {
  return (
    <section className="flex gap-2">
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
        <div className="text-[#894900] text-right flex-1">
          <h3 className="text-3xl font-semibold">Sobre Nathalia Leme</h3>
          <p className="text-2xl leading-9">
            Sou arquiteta especializada em Psicoarquitetura e meu propósito é
            transformar ambientes em espaços de pertencimento e acolhimento.
            Acredito que cada projeto deve refletir a essência de quem habita,
            indo muito além das tendências. Antes de definir cores ou formas,
            busco compreender sentimentos, histórias e a vida que cada pessoa
            deseja viver.
          </p>
          <p className="text-2xl leading-9 pt-5">
            Desenvolvi o conceito de arquitetura com alma, que une psicologia,
            estética e praticidade para criar ambientes únicos, capazes de
            organizar o caos, acolher e até exercer um papel terapêutico. Meu
            trabalho é dar forma ao invisível, traduzindo quem você é em espaços
            verdadeiros e cheios de significado.
          </p>
        </div>
        <div className="flex justify-end">
          <a
            href="https://www.instagram.com/arquitetanath/#"
            target="_blank"
            className="w-70 h-15 bg-[#FADBBB] border border-[rgba(206,131,74,0.3)] flex items-center justify-center gap-10 shadow-sm transition-all duration-300 hover:shadow-md rounded-2xl"
          >
            <div className="relative">
              <InstagramIcon className="w-12 h-12" fill="#B26F3D" />
              <img
                src={nath}
                alt="Nathalia"
                className="w-10 h-10 rounded-full object-cover absolute top-1 left-8"
              />
            </div>
            <span className="text-[#B26F3D] font-bold underline">
              Siga no Instagram!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
