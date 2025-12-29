import { Quote } from 'lucide-react';

export function ProfessionalTestimonialsSection() {
  const testimonials = [
    {
      name: 'María',
      role: 'Estudiante de Secundaria',
      text: 'Los cursos me ayudaron a mejorar significativamente mis notas en matemáticas. La metodología es clara y los profesores siempre están dispuestos a ayudar.',
    },
    {
      name: 'Carlos',
      role: 'Estudiante Universitario',
      text: 'Gracias a la plataforma pude reforzar mis conocimientos en programación. El material está muy bien organizado y los ejercicios son muy prácticos.',
    },
    {
      name: 'Ana',
      role: 'Madre de Familia',
      text: 'Como madre, me siento tranquila sabiendo que mi hijo tiene acceso a contenido de calidad y un seguimiento personalizado de su progreso académico.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-slate-300" />
              <span className="text-sm text-slate-500 tracking-wide uppercase">Testimonios</span>
              <div className="w-8 h-0.5 bg-slate-300" />
            </div>
          </div>
          <h2 className="text-4xl text-slate-900 tracking-tight">
            Lo que dicen nuestros estudiantes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="h-full p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 space-y-6">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-slate-300">
                  <div className="text-sm text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
