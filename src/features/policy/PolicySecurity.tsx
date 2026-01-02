import { useMemo, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../../shared/constants';
import {
    ArrowLeft,
    ShieldCheck,
    Clock,
    BadgeCheck,
    Mail,
    Lock,
    UserCheck,
    AlertTriangle,
} from 'lucide-react';

type TocItem = { id: string; n: string; title: string; hint: string };

export function PolicySecurity() {
    const navigate = useNavigate();

    const toc = useMemo<TocItem[]>(
        () => [
            { id: 'alcance', n: '01', title: 'Alcance', hint: 'Qué cubre esta política' },
            { id: 'cuentas', n: '02', title: 'Seguridad de la cuenta', hint: 'Acceso, contraseñas y sesiones' },
            { id: 'datos', n: '03', title: 'Protección de datos', hint: 'Qué recolectamos y cómo lo cuidamos' },
            { id: 'uso', n: '04', title: 'Uso aceptable', hint: 'Reglas para prevenir abuso' },
            { id: 'incidentes', n: '05', title: 'Incidentes y soporte', hint: 'Cómo reportar y qué haremos' },
            { id: 'reporte', n: '06', title: 'Reporte responsable', hint: 'Canal seguro para avisarnos' },
            { id: 'cambios', n: '07', title: 'Cambios a la política', hint: 'Actualizaciones y vigencia' },
        ],
        []
    );

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* ⬇️ Mismo padding-top que Terms (navbar no tapa títulos) */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 sm:pt-36 pb-24">
                {/* Header */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                        Políticas de Seguridad
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Estas políticas describen prácticas de protección para la plataforma y pautas de uso seguro.
                        También explican cómo reportar problemas o actividades sospechosas.
                    </p>

                    <br />

                    {/* ✅ Meta replicando EXACTO el patrón de Terms (con <br/>) */}
                    <div className="mt-6 space-y-2 text-sm text-slate-600">
                        <div className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Última actualización: Enero 2026</span>
                        </div>
                        <br />
                        <div className="inline-flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Enfoque: protección del usuario</span>
                        </div>
                        <br />
                        <div className="inline-flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4" />
                            <span>Vigente</span>
                        </div>
                        <br />
                        <br />
                    </div>

                    {/* Back */}
                    <div className="mt-8">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver al inicio
                        </button>
                    </div>
                </div>

                {/* Callout */}
                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-slate-700 mt-0.5" />
                        <div>
                            <h2 className="text-sm font-semibold text-slate-900">Recomendación</h2>
                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                Si detectas algo raro (accesos no reconocidos, mensajes extraños o intentos de suplantación),
                                cambia tu contraseña y repórtalo. No compartas códigos ni información sensible.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Layout */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* TOC */}
                    <aside className="lg:col-span-4">
                        {/* ⬇️ mismo sticky top que Terms */}
                        <div className="lg:sticky lg:top-32 rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="px-6 pt-6 pb-4">
                                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                                    Contenido
                                </p>
                            </div>

                            <div className="px-3 pb-5">
                                {toc.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className="w-full rounded-xl px-3 py-3 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-10 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                        {item.n}
                      </span>
                                            <div className="min-w-0">
                                                <div className="text-sm font-medium text-slate-900">{item.title}</div>
                                                <div className="mt-0.5 text-xs text-slate-500">{item.hint}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* ✅ igual que Terms: separador + tip abajo + br */}
                            <div className="border-t border-slate-100 px-6 pt-6 pb-7 text-xs text-slate-500">
                                Tip: revisa “Incidentes y soporte” y “Reporte responsable”.
                            </div>
                            <br />
                        </div>
                    </aside>

                    {/* Content */}
                    {/* ✅ mismo spacing que Terms */}
                    <section className="lg:col-span-8 space-y-10">
                        <div className="h-2 sm:h-4" />

                        <CardSection id="alcance" title="1. Alcance" icon={<ShieldCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Aplica al sitio, formularios, contenidos y cualquier interacción con Leonix Academy.</li>
                                <li>Busca proteger a usuarios, comunidad y una experiencia segura dentro de la plataforma.</li>
                            </ul>
                        </CardSection>

                        <br />

                        <CardSection id="cuentas" title="2. Seguridad de la cuenta" icon={<Lock className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Usa contraseñas fuertes y no las compartas (ni por chat, ni por correo).</li>
                                <li>Evita iniciar sesión en equipos públicos; si lo haces, cierra sesión siempre.</li>
                                <li>Si notas actividad sospechosa, cambia tu contraseña y contáctanos.</li>
                            </ul>
                        </CardSection>

                        <br />

                        <CardSection id="datos" title="3. Protección de datos" icon={<UserCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Recolectamos datos mínimos necesarios para operar, mejorar la experiencia y brindar soporte.</li>
                                <li>No publiques información sensible innecesaria (documentos, claves, datos bancarios, etc.).</li>
                                <li>Si usamos proveedores (p. ej., correo/hosting), aplican solo para operar el servicio cuando corresponda.</li>
                            </ul>
                        </CardSection>

                        <br />

                        <CardSection id="uso" title="4. Uso aceptable" icon={<BadgeCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>No se permite suplantación, fraude, spam, acoso o comportamiento abusivo.</li>
                                <li>No intentes interferir con el funcionamiento del sitio o manipular contenidos.</li>
                                <li>Podemos restringir acceso si detectamos abuso o riesgo para la comunidad.</li>
                            </ul>
                        </CardSection>

                        <br />

                        <CardSection id="incidentes" title="5. Incidentes y soporte" icon={<AlertTriangle className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Revisamos reportes razonables y tomamos medidas para proteger a usuarios.</li>
                                <li>Podemos pedir detalles adicionales para entender el caso (sin pedirte contraseñas).</li>
                                <li>Si es necesario, podríamos limitar temporalmente ciertas funciones para reducir riesgos.</li>
                            </ul>
                        </CardSection>

                        <br />

                        <CardSection id="reporte" title="6. Reporte responsable" icon={<Mail className="h-5 w-5" />}>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                <p className="text-slate-700">
                                    Si encuentras un problema de seguridad, <b>no lo explotes</b> ni lo publiques.
                                    Repórtalo de forma privada a:
                                </p>

                                <a
                                    className="mt-3 inline-flex items-center gap-2 font-medium text-slate-900 hover:underline underline-offset-4"
                                    href={`mailto:${CONTACT_INFO.email}`}
                                >
                                    <Mail className="h-4 w-4" />
                                    {CONTACT_INFO.email}
                                </a>

                                <p className="mt-3 text-xs text-slate-500">
                                    Incluye: qué pasó, dónde lo viste y (si puedes) una captura o pasos para reproducir sin abuso.
                                </p>
                            </div>
                        </CardSection>

                        <br />

                        <CardSection id="cambios" title="7. Cambios a la política" icon={<Clock className="h-5 w-5" />}>
                            <p>
                                Podemos actualizar esta política para mejorar protección o cumplir requisitos. La versión vigente
                                será la publicada en esta página.
                            </p>
                        </CardSection>

                        <br />

                        {/* espacio final para que no “pegue” con el footer */}
                        <div className="h-14" />
                    </section>
                </div>
            </div>
        </div>
    );
}

function CardSection({
                         id,
                         title,
                         icon,
                         children,
                     }: {
    id: string;
    title: string;
    icon: ReactNode;
    children: ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-36">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-7">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                            {icon}
                        </div>
                        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
                            {title}
                        </h2>
                    </div>

                    <div className="text-sm sm:text-[15px] text-slate-600 leading-relaxed space-y-3">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
