import { TrendingUp, Calendar, Laptop, Users } from 'lucide-react';

export function ProfessionalBenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description: 'Seguimiento cuantificable de tu progreso académico y mejora en calificaciones',
    },
    {
      icon: Calendar,
      title: 'Gestión del Tiempo',
      description: 'Estructura organizada que optimiza tu tiempo de estudio y recursos',
    },
    {
      icon: Laptop,
      title: 'Plataforma Intuitiva',
      description: 'Interfaz clara y funcional diseñada para facilitar el aprendizaje',
    },
    {
      icon: Users,
      title: 'Soporte Continuo',
      description: 'Acompañamiento académico permanente para resolver tus dudas',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl text-slate-900 tracking-tight">
            Por qué elegirnos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beneficios concretos para tu desarrollo académico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div key={index} className="group space-y-4 relative">
                {/* Subtle hover background */}
                <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="relative p-6 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg text-slate-900 mt-4 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
