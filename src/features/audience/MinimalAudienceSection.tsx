import { ImageWithFallback } from '../../shared/components/ImageWithFallback';

export function MinimalAudienceSection() {
  const audiences = [
    {
      title: 'Estudiantes de Secundaria',
      description: 'Refuerza conceptos clave y prepárate para exámenes con nuestra metodología estructurada',
      image: 'https://images.unsplash.com/photo-1760574740270-067dc14bf164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjB0ZWVuYWdlciUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Njk0ODk0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Universitarios',
      description: 'Domina materias complejas con explicaciones claras y ejercicios prácticos avanzados',
      image: 'https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2Njk0ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Padres de Familia',
      description: 'Acompaña el progreso académico de tus hijos con seguimiento transparente y reportes periódicos',
      image: 'https://images.unsplash.com/photo-1593460914945-87ac93f6a5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJ1dmlhbiUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2Njk0ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl text-slate-900 tracking-tight">
            Para Quién es Leonix Academy
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Diseñado para diferentes perfiles académicos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-slate-100">
                <ImageWithFallback
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
