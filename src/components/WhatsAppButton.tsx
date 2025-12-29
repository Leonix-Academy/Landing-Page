import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Tooltip - Only visible on hover with CSS */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
            ¿Necesitas ayuda?
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900" />
          </div>
        </div>

        {/* Button */}
        <div className="w-14 h-14 bg-slate-900 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
      </div>
    </a>
  );
}
