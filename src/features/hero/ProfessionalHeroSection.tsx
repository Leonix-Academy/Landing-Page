import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';

export function ProfessionalHeroSection() {
  const { scrollToSection } = useScrollTo();

  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                Plataforma Educativa Digital
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight">
              Educación que
              <br />
              <span className="text-slate-600">transforma</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Refuerza tus conocimientos en matemáticas, física, química y programación con una metodología clara y efectiva.
            </p>

            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                <span className="text-sm">Clases personalizadas a tu ritmo</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                <span className="text-sm">Profesores especializados</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                <span className="text-sm">Seguimiento de progreso en tiempo real</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3.5 bg-slate-900 text-white rounded-md hover:bg-blue-600 transition-all flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl hover:shadow-blue-600/20"
              >
                Comenzar ahora
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('cursos')}
                className="px-8 py-3.5 bg-white text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50 transition-all text-sm"
              >
                Ver cursos
              </button>
            </div>
          </div>

          {/* Right - Stats Card */}
        </div>
      </div>
    </section>
  );
}
