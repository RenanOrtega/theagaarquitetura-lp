import { useDate } from "../hooks/useDate";

export default function Footer() {
  // Hook para obter data atual automaticamente
  const { getCurrentYear } = useDate();
  const currentYear = getCurrentYear();

  return (
    <footer
      className="py-8"
      style={{ backgroundColor: "rgba(137, 73, 0, 0.4)" }}
    >
      <div className="flex justify-center gap-5 pb-5">
        {/* Informações de Contato */}
        <div className="text-white">
          <h3 className="text-xl font-bold mb-4 text-[#F5E6D3]">Contato</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <span>📧</span>
              <a
                href="mailto:nath.arquiteta@gmail.com"
                className="hover:text-[#F5E6D3] transition-colors"
              >
                nath.arquiteta@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <span>📱</span>
              <a
                href="https://wa.me/5511994696897"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5E6D3] transition-colors"
              >
                (11) 99469-6897
              </a>
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="text-white">
          <h3 className="text-xl font-bold mb-4 text-[#F5E6D3]">
            Redes Sociais
          </h3>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.instagram.com/arquitetanath/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 fill-[#894900] opacity-40"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://br.pinterest.com/arquitetanath"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 fill-[#894900] opacity-40"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.996 1.482-1.996.699 0 1.037.219 1.037 1.219 0 .759-.219 1.896-.359 2.955-.219.937.479 1.701 1.482 1.701 1.781 0 2.955-1.896 2.955-4.62 0-1.896-1.337-3.293-3.293-3.293-2.403 0-3.870 1.781-3.870 3.697 0 .759.299 1.219.662 1.578.072.072.083.134.061.206-.067.281-.216.865-.245.985-.04.164-.134.198-.309.12-1.276-.593-2.018-2.377-2.018-3.856 0-3.293 2.663-6.586 7.618-6.586 4.005 0 6.717 2.663 6.717 6.226 0 4.178-2.663 7.296-6.586 7.296-1.316 0-2.5-.662-2.955-1.482l-.767 3.014c-.299 1.142-1.018 2.5-1.618 3.437.719.219 1.478.359 2.298.359 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/nath-arquiteta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 fill-[#894900] opacity-40"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-white border-opacity-20 text-center text-white text-sm opacity-75">
        <p>
          &copy; {currentYear} Theaga Arquitetura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
