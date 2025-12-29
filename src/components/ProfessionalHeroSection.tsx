import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export function ProfessionalHeroSection() {
  const { scrollToSection } = useScrollTo();

  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              Plataforma Educativa Digital
            </div>
            
            <h1 className="text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight">
              Educación que
              <br />
              <span className="text-slate-600">transforma</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Refuerza tus conocimientos en matemáticas, física, química y programación con una metodología clara y efectiva.
            </p>

            <div className="space-y-3">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          <div className="lg:pl-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl text-slate-900 text-[36px]">1K xD+</div>
                  <div className="text-sm text-slate-600">Estudiantes activos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Satisfacción</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl text-slate-900">1K xd+</div>
                  <div className="text-sm text-slate-600">Cursos disponibles</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">Soporte</div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-300">
                <p className="text-sm text-slate-600 leading-relaxed">
                  "La metodología de Leonix Academy me ayudó a mejorar significativamente mis calificaciones en matemáticas y física."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300" />
                  <div>
                    <div className="text-sm text-slate-900">Yose Luza</div>
                    <div className="text-xs text-slate-500">Estudiante Universitario</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}