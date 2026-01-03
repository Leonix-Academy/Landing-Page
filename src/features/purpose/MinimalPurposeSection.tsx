import readingSvg from '../../assets/undraw_online-reading.svg';

export function MinimalPurposeSection() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-slate-300" />
                <span className="text-sm text-slate-500 tracking-wide uppercase">Sobre Nosotros</span>
                <div className="w-8 h-0.5 bg-slate-300" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              ¿Qué es
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Leonix Academy?
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Somos una plataforma educativa enfocada en reforzar conocimientos fundamentales en ciencias y programación.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Ofrecemos una experiencia estructurada que combina contenido de calidad con seguimiento personalizado para ayudarte a alcanzar tus objetivos académicos.
            </p>

            <div className="flex items-start gap-3 pt-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">Metodología probada</h3>
                <p className="text-sm text-slate-600">Enfoque estructurado que ha ayudado a cientos de estudiantes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">Aprendizaje flexible</h3>
                <p className="text-sm text-slate-600">Estudia a tu propio ritmo, cuando y donde quieras</p>
              </div>
            </div>
          </div>

          {/* Right - SVG Illustration */}
          <div className="relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-indigo-400/10 rounded-3xl blur-2xl" />

              {/* SVG Container */}
              <div className="relative">
                <img
                  src={readingSvg}
                  alt="Estudiante aprendiendo online"
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
