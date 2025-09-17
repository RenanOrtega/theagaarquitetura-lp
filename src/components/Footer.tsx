import { useDate } from "../hooks/useDate";
import InstagramIcon from "../assets/svg/instagram";
import PinterestIcon from "../assets/svg/pinterest";
import LinkedInIcon from "../assets/svg/linkedin";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  // Hook para obter data atual automaticamente
  const { getCurrentYear } = useDate();
  const currentYear = getCurrentYear();

  return (
    <footer
      style={{ backgroundColor: "var(--color-primary-medium)" }}
      className="py-8"
    >
      <div className="flex justify-center gap-12 pb-12">
        {/* Informações de Contato */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl text-center font-bold text-[var(--color-primary-lightest)]">
            Contato
          </h3>
          <div className="flex flex-col">
            <p className="flex items-center justify-center gap-2">
              <Mail />
              <a
                href="mailto:nath.arquiteta@gmail.com"
                className="hover:text-[var(--color-primary-lightest)] transition-colors"
              >
                nath.arquiteta@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone />
              <a
                href="https://wa.me/5511994696897"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary-lightest)] transition-colors"
              >
                (11) 99469-6897
              </a>
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl font-bold text-center text-[var(--color-primary-lightest)]">
            Redes Sociais
          </h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/arquitetanath/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <InstagramIcon className="text-[var(--color-primary-medium)]" />
            </a>
            <a
              href="https://br.pinterest.com/arquitetanath"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <PinterestIcon className="text-[var(--color-primary-medium)]" />
            </a>
            <a
              href="https://linkedin.com/in/nath-arquiteta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <LinkedInIcon className="text-[var(--color-primary-medium)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-20 text-center text-white text-sm opacity-75 pt-24">
        <p>
          &copy; {currentYear} Theaga Arquitetura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
