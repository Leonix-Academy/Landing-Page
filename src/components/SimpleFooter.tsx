import { useScrollTo } from '../hooks/useScrollTo';
import { CONTACT_INFO } from '../constants';
import logo from "figma:asset/d7e5da8504ccad523f8952ed8f331d51f090e770.png";

export function SimpleFooter() {
  const { scrollToSection, scrollToTop } = useScrollTo();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <img 
                src={logo} 
                alt="Leonix Academy" 
                className="w-9 h-9 brightness-0 invert" 
              />
              <span className="text-base text-white">LEONIX ACADEMY</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Plataforma educativa enfocada en ciencias y programación.
            </p>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="text-sm text-white mb-4">Cursos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('cursos')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Matemáticas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cursos')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Física
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cursos')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Química
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cursos')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Programación
                  </button>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('nosotros')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('metodologia')} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Metodología
                </button>
              </li>
              <li>
                <button onClick={scrollToTop} className="text-sm text-slate-500 hover:text-white transition-colors text-left">
                  Testimonios
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-slate-500 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-sm text-slate-500 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="text-sm text-slate-500">
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Leonix Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}