import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';
import logo from '../../assets/leonix-logo.png';
//import logo from '../../assets/leonix-logo.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection, scrollToTop } = useScrollTo();

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Leonix Academy" className="w-9 h-9" />
            <span className="text-lg tracking-tight text-slate-900">LEONIX ACADEMY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={scrollToTop} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('cursos')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Cursos
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('metodologia')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Metodología
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('contacto')} className="px-6 py-2.5 bg-slate-900 text-white text-sm rounded-md hover:bg-blue-600 transition-all">
              Empezar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-50"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} className="text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => handleScrollToSection('cursos')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
                Cursos
              </button>
              <button onClick={() => handleScrollToSection('nosotros')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
                Nosotros
              </button>
              <button onClick={() => handleScrollToSection('metodologia')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
                Metodología
              </button>
              <button onClick={() => handleScrollToSection('contacto')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
                Contacto
              </button>
              <button onClick={() => handleScrollToSection('contacto')} className="px-6 py-2.5 bg-slate-900 text-white text-sm rounded-md hover:bg-blue-600 transition-all w-full">
                Empezar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
