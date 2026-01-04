import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';
import heroImage from '../../assets/undraw_online-learning.svg';

export function ProfessionalHeroSection() {
  const { scrollToSection } = useScrollTo();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 text-cyan-700 text-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
              Plataforma Educativa Digital
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-tight">
              Educación que
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                transforma
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Refuerza tus conocimientos en matemáticas, física, química y programación con una metodología clara y efectiva.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base">Clases personalizadas a tu ritmo</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base">Profesores especializados</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base">Seguimiento de progreso en tiempo real</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contacto')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('cursos')}
                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Ver cursos
              </button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-indigo-400/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />

              {/* SVG Image container */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Leonix Academy - Educación Digital"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
