import { useState } from 'react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';
import { CONTACT_INFO } from '../../shared/constants';
import logo from '../../assets/leonix-logo.png';
import { useNavigate } from 'react-router-dom';
import { Check, Copy } from 'lucide-react';

export function SimpleFooter() {
  const { scrollToSection, scrollToTop } = useScrollTo();
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);

  // Navega a home y luego scrollea a la sección
  const goHomeAndScroll = (sectionId: string) => {
    navigate('/', { replace: false });
    window.setTimeout(() => scrollToSection(sectionId), 80);
  };

  // Copiar email al clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };

  // WhatsApp link
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

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
              onClick={() => {
                navigate('/');
                window.setTimeout(() => scrollToTop(), 50);
              }}
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
              Plataforma educativa de alto rendimiento enfocada <br />
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
                    onClick={() => goHomeAndScroll('cursos')}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
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
                  onClick={() => goHomeAndScroll('nosotros')}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => goHomeAndScroll('metodologia')}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Metodología
                </button>
              </li>
              <li>
                <button
                  onClick={() => goHomeAndScroll('contacto')}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="min-w-[180px]">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    navigate('/terminos');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/politicas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
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
              {/* Email con copy */}
              <div className="relative">
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="underline-offset-4 group-hover:underline">{CONTACT_INFO.email}</span>
                  {emailCopied ? (
                    <Check className="w-3 h-3 text-green-400" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
                {emailCopied && (
                  <div className="absolute -top-8 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-md shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
                    ¡Copiado!
                  </div>
                )}
              </div>

              {/* Phone con WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors hover:underline underline-offset-4 cursor-pointer"
              >
                {CONTACT_INFO.phone}
              </a>
              <span className="text-sm text-slate-500">{CONTACT_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Divider con más espacio */}
        <div className="h-px w-full bg-slate-800/40 mt-12 mb-8" />

        {/* Copyright con más padding */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-600 tracking-wide">
            &copy; 2026 Leonix Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
