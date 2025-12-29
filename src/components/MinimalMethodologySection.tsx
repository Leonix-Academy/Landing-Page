import { CheckCircle2 } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export function MinimalMethodologySection() {
  const { scrollToSection } = useScrollTo();
  const steps = [
    {
      number: '01',
      title: 'Evaluación Inicial',
      description: 'Identificamos tu nivel actual y objetivos académicos específicos',
    },
    {
      number: '02',
      title: 'Plan Personalizado',
      description: 'Creamos una ruta de aprendizaje adaptada a tus necesidades',
    },
    {
      number: '03',
      title: 'Clases Interactivas',
      description: 'Contenido estructurado con ejemplos prácticos y ejercicios',
    },
    {
      number: '04',
      title: 'Seguimiento Continuo',
      description: 'Evaluamos tu progreso y ajustamos el plan según resultados',
    },
  ];

  const features = [
    'Material de estudio descargable',
    'Sesiones en vivo y grabadas',
    'Ejercicios con retroalimentación',
    'Comunidad de estudiantes',
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Process */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-slate-300" />
                  <span className="text-sm text-slate-500 tracking-wide uppercase">Metodología</span>
                  <div className="w-8 h-0.5 bg-slate-300" />
                </div>
              </div>
              <h2 className="text-4xl text-slate-900 tracking-tight">
                Cómo Trabajamos
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Un proceso estructurado diseñado para maximizar tu aprendizaje
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="relative">
                    <div className="text-3xl text-slate-900 flex-shrink-0 w-16 h-16 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-300 shadow-sm">
                      <span className="text-lg">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-200" />
                    )}
                  </div>
                  <div className="pt-3 flex-1">
                    <h3 className="text-lg text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-slate-900 mb-8">
              Qué Incluye
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-base text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-all text-sm shadow-lg hover:shadow-xl hover:shadow-blue-600/20"
              >
                Solicitar información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}