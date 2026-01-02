import { Calculator, Atom, FlaskConical, Code2, BookOpen, Pencil, Globe } from 'lucide-react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';

export function FreshCoursesSection() {
  const { scrollToSection } = useScrollTo();
  const courses = [
    {
      icon: Calculator,
      title: 'Fundamentos de Cálculo',
      description: 'Domina límites, derivadas e integrales desde cero',
    },
    {
      icon: Code2,
      title: 'Fundamentos de Programación',
      description: 'Aprende lógica de programación y algoritmos esenciales',
      featured: true,
    },
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Crea sitios web modernos con HTML, CSS y JavaScript',
    },
    {
      icon: Atom,
      title: 'Fundamentos de Física',
      description: 'Entiende los principios básicos de mecánica y energía',
    },
    {
      icon: BookOpen,
      title: 'Razonamiento Verbal',
      description: 'Mejora tu comprensión lectora y vocabulario',
    },
    {
      icon: Pencil,
      title: 'Lenguaje',
      description: 'Domina la gramática, ortografía y redacción efectiva',
    },
    {
      icon: FlaskConical,
      title: 'Química',
      description: 'Descubre los secretos de la materia y sus reacciones',
    },
  ];

  return (
    <section id="cursos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-slate-300" />
              <span className="text-sm text-slate-500 tracking-wide uppercase">Nuestros Cursos</span>
              <div className="w-8 h-0.5 bg-slate-300" />
            </div>
          </div>
          <h2 className="text-4xl text-slate-900 tracking-tight">
            Programas Académicos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Contenido especializado para cada disciplina
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Featured badge */}
                {course.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-blue-600 text-white rounded-full text-xs shadow-lg">
                    Destacado
                  </div>
                )}

                <div className={`h-full p-6 rounded-xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${course.featured
                    ? 'border-blue-600 shadow-lg shadow-blue-600/10'
                    : 'border-slate-200 hover:border-blue-200'
                  }`}>
                  {/* Icon with subtle gradient background */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${course.featured
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-600/30'
                      : 'bg-slate-100 group-hover:bg-blue-50'
                    }`}>
                    <Icon className={`w-6 h-6 ${course.featured
                        ? 'text-white'
                        : 'text-slate-700 group-hover:text-blue-600'
                      }`} />
                  </div>

                  <h3 className="text-lg text-slate-900 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    onClick={() => scrollToSection('contacto')}
                    className="mt-4 flex items-center gap-2 text-sm text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Ver detalles</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
