import { useScrollTo } from '../../shared/hooks/useScrollTo';
import { CONTACT_INFO } from '../../shared/constants';
import logo from '../../assets/leonix-logo.png';

export function SimpleFooter() {
  const { scrollToSection, scrollToTop } = useScrollTo();

  return (
      <footer
          className="w-full border-t border-slate-900 text-slate-400"
          style={{ backgroundColor: '#020617' }}
      >
        <div className="max-w-7xl mx-auto px-8 py-16">

          {/* ✅ MISMO LAYOUT: una fila que hace wrap, pero con anchos y gaps uniformes */}
          <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-12">

            {/* LOGO + TEXTO (ancho controlado para no empujar todo) */}
            <div className="min-w-[320px] max-w-[440px]">
              <div
                  className="flex items-center gap-3 cursor-pointer group mb-4"
                  onClick={scrollToTop}
              >
                <img
                    src={logo}
                    alt="Leonix Academy"
                    className="w-9 h-9 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-lg font-bold text-white tracking-tight">
                LEONIX ACADEMY
              </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Plataforma educativa de alto rendimiento enfocada <br/>
                en ciencias aplicadas y programación competitiva.
              </p>
            </div>

            {/* CURSOS */}
            <div className="min-w-[180px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white mb-4">
                Cursos
              </h3>
              <ul className="space-y-3">
                {['Matemáticas', 'Física', 'Química', 'Programación'].map((curso) => (
                    <li key={curso}>
                      <button
                          onClick={() => scrollToSection('cursos')}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {curso}
                      </button>
                    </li>
                ))}
              </ul>
            </div>

            {/* EMPRESA */}
            <div className="min-w-[180px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white mb-4">
                Empresa
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                      onClick={() => scrollToSection('nosotros')}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => scrollToSection('metodologia')}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Metodología
                  </button>
                </li>
                <li>
                  <button
                      onClick={scrollToTop}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Testimonios
                  </button>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="min-w-[220px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                      onClick={() => scrollToSection('terminos')}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => scrollToSection('politicas')}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Políticas de Seguridad
                  </button>
                </li>
              </ul>
            </div>

            {/* CONTACTO (alineado a la derecha cuando hay espacio) */}
            <div className="min-w-[240px] ml-auto text-right">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white mb-4">
                Contacto
              </h3>
              <div className="flex flex-col items-end space-y-3">
                <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
                <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
                <span className="text-sm text-slate-500">{CONTACT_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-800/40 my-10" />

          {/* Copyright */}
          <div className="text-center">
            <br/>
            <p className="text-xs text-slate-600 tracking-wide">
              &copy; 2026 Leonix Academy. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
  );
}
