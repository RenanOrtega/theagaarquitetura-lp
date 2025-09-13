import nath from "../assets/nath.png";
import InstagramIcon from "../assets/instagram";

export default function Personal() {
  return (
    <section className="min-h-screen flex gap-16 items-center px-10 py-12">
      {/* Lado da imagem */}
      <div className="flex-1 max-w-[600px]">
        <img
          src={nath}
          alt="Nathalia Leme"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Lado do texto */}
      <div className="flex-1 flex flex-col justify-center gap-6 text-[#894900] text-right">
        <h3 className="text-4xl font-semibold">Sobre Nathalia Leme</h3>
        <p className="text-3xl leading-10">
          Sou arquiteta especializada em Psicoarquitetura e meu propósito é
          transformar ambientes em espaços de pertencimento e acolhimento.
          Acredito que cada projeto deve refletir a essência de quem habita,
          indo muito além das tendências. Antes de definir cores ou formas,
          busco compreender sentimentos, histórias e a vida que cada pessoa
          deseja viver.
        </p>
        <p className="text-3xl leading-10">
          Desenvolvi o conceito de arquitetura com alma, que une psicologia,
          estética e praticidade para criar ambientes únicos, capazes de
          organizar o caos, acolher e até exercer um papel terapêutico. Meu
          trabalho é dar forma ao invisível, traduzindo quem você é em espaços
          verdadeiros e cheios de significado.
        </p>

        <div className="pt-15 flex justify-end">
          <a
            href="https://www.instagram.com/arquitetanath/#"
            target="_blank"
            className="w-70 h-15 bg-[#FADBBB] border border-[rgba(206,131,74,0.3)] rounded-xl flex items-center justify-center gap-10 shadow-sm transition-all duration-300 hover:shadow-md"
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
