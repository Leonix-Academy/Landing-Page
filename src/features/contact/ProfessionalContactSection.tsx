import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO, FORM_VALIDATION } from '../../shared/constants';
import messageSentSvg from '../../assets/undraw_message-sent.svg';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ProfessionalContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

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
      // Crear mensaje formateado para WhatsApp
      const whatsappMessage = `*Nuevo contacto desde Leonix Academy*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.phone || 'No proporcionado'}%0A*Mensaje:*%0A${formData.message}`;

      const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${whatsappMessage}`;

      // Crear mensaje para correo electrónico
      const emailSubject = `Consulta información ${formData.name} ${formData.phone || ''}`.trim();
      const emailBody = `Nuevo contacto desde Leonix Academy\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\n\nMensaje:\n${formData.message}`;
      const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Abrir WhatsApp en nueva ventana
      window.open(whatsappUrl, '_blank');

      // Abrir cliente de correo usando elemento temporal para evitar redirección
      const mailLink = document.createElement('a');
      mailLink.href = emailUrl;
      mailLink.target = '_blank';
      document.body.appendChild(mailLink);
      mailLink.click();
      document.body.removeChild(mailLink);

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setErrorMessage('Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.');
      setFormStatus('error');
    }
  };

  // Copiar email al clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };

  // WhatsApp link
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <section id="contacto" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl text-white tracking-tight">
                Contáctanos
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Estamos aquí para responder tus preguntas y ayudarte a comenzar tu camino de aprendizaje
              </p>
            </div>

            {/* Contact info first */}
            <div className="space-y-6 flex-grow">{/* Email con copy */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-slate-500 mb-1">Email</h3>
                  <div className="relative inline-block">
                    <button
                      onClick={copyEmail}
                      className="group/email flex items-center gap-2 text-base text-white hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <span>{CONTACT_INFO.email}</span>
                      {emailCopied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity" />
                      )}
                    </button>
                    {emailCopied && (
                      <div className="absolute -top-10 left-0 bg-green-600 text-white text-xs px-3 py-1.5 rounded-md shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 whitespace-nowrap">
                        ¡Email copiado!
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Phone con WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-slate-500 mb-1">Teléfono / WhatsApp</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-slate-500 mb-1">Ubicación</h3>
                  <p className="text-base text-white">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* SVG in a “matching” container so it feels part of the layout */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-slate-400">
                    ¿Listo para escribirnos?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Completa el formulario y se abrirá WhatsApp con tu mensaje.
                  </p>
                </div>

                <img
                  src={messageSentSvg}
                  alt="Mensaje enviado"
                  className="w-auto h-24 sm:h-28 lg:h-32 opacity-80 hover:opacity-90 transition-opacity duration-300 select-none"
                />
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm text-slate-400 mb-2">
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  placeholder="+51 999 999 999"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors resize-none text-sm"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                />
              </div>

              {/* Error Message */}
              {formStatus === 'error' && errorMessage && (
                <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-400">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar consulta
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
