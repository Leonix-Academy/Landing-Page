import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO, FORM_VALIDATION } from '../../shared/constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ProfessionalContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    if (formData.name.length < FORM_VALIDATION.minNameLength) {
      setErrorMessage(`El nombre debe tener al menos ${FORM_VALIDATION.minNameLength} caracteres.`);
      return false;
    }
    if (formData.message.length < FORM_VALIDATION.minMessageLength) {
      setErrorMessage(`El mensaje debe tener al menos ${FORM_VALIDATION.minMessageLength} caracteres.`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call - Replace with actual backend call later
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log for development
      console.log('Form submitted:', formData);
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('No se pudo enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error submitting form:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_INFO.email,
      subtext: 'Respuesta en 24 horas',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: CONTACT_INFO.phone,
      subtext: 'Lun - Vie: 9:00 AM - 6:00 PM',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: CONTACT_INFO.location,
      subtext: 'Clases 100% virtuales',
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl tracking-tight">
            Contáctanos
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Completa el formulario y te responderemos a la brevedad
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                    <div className="text-base">{info.value}</div>
                    <div className="text-sm text-slate-500 mt-1">{info.subtext}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent resize-none transition-all text-sm"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar consulta
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-400">
                    ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
