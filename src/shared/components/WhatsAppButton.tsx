import { CONTACT_INFO } from '../constants';

const WHATSAPP_CONFIG = {
  phoneNumber: CONTACT_INFO.phoneRaw,
  message: CONTACT_INFO.whatsappMessage,
} as const;

// Tu función exacta con una pequeña mejora en el fill para soporte de temas
export const Whatsapp = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
    >
      <path
          fill="currentColor"
          d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
      />
    </svg>
);

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(
      WHATSAPP_CONFIG.message
  )}`;

  return (
      <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Contactar por WhatsApp"
      >
        <div className="relative">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              ¿Necesitas ayuda?
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900" />
            </div>
          </div>

          {/* Botón Circular */}
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 cursor-pointer group-hover:scale-110"
            style={{ backgroundColor: '#145cfc' }}
          >
            {/* Tu icono aplicado con tamaño específico */}
            <Whatsapp className="w-8 h-8 text-white" />
          </div>

          {/* Efecto de Pulso (Opcional) */}
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none -z-10"
            style={{ backgroundColor: '#145cfc' }}
          />
        </div>
      </a>
  );
}