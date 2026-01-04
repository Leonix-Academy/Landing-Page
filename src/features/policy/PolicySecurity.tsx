import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../../shared/constants';
import { ArrowLeft, ShieldCheck, Clock, BadgeCheck, Mail, Lock, UserCheck, AlertTriangle } from 'lucide-react';

type TocItem = { id: string; n: string; title: string; hint: string };

const SECONDARY = '#145cfc';
const ACCENT_SOFT_BG = 'rgba(20, 92, 252, 0.12)';
const ACCENT_RING = 'rgba(20, 92, 252, 0.35)';

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
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 sm:pt-36 pb-24">
                {/* HERO */}
                <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div style={{ backgroundColor: SECONDARY }} className="absolute inset-x-0 top-0 h-1.5" />
                    <div className="p-6 sm:p-10">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <button
                                    onClick={() => navigate('/')}
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{ ['--tw-ring-color' as any]: ACCENT_RING } as CSSProperties}
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Volver al inicio
                                </button>

                                <div className="flex flex-wrap items-center gap-2">
                                    <MetaPill icon={<Clock className="h-4 w-4" />} label="Última actualización: Enero 2026" />
                                    <MetaPill icon={<ShieldCheck className="h-4 w-4" />} label="Enfoque: protección del usuario" />
                                    <MetaPill icon={<BadgeCheck className="h-4 w-4" />} label="Vigente" />
                                </div>
                            </div>

                            <div className="max-w-3xl">
                                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                                    Políticas de Seguridad
                                </h1>
                                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                                    Estas políticas describen prácticas de protección para la plataforma y pautas de uso seguro. También
                                    explican cómo reportar problemas o actividades sospechosas.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* CALLOUT */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                    <div className="flex items-start gap-3">
                        <div
                            className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
                            style={{ backgroundColor: SECONDARY }}
                        >
                            <AlertTriangle className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-slate-900">Recomendación</h2>
                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                Si detectas algo raro (accesos no reconocidos, mensajes extraños o intentos de suplantación), cambia tu
                                contraseña y repórtalo. No compartas códigos ni información sensible.
                            </p>
                        </div>
                    </div>
                </div>

                {/* LAYOUT */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* TOC */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                            <div className="px-6 pt-6 pb-4">
                                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Contenido</p>
                            </div>

                            <div className="px-3 pb-4">
                                {toc.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className="group w-full rounded-2xl px-3 py-3 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                        style={{ ['--tw-ring-color' as any]: ACCENT_RING } as CSSProperties}
                                    >
                                        <div className="flex items-start gap-3">
                      <span
                          className="mt-0.5 inline-flex h-8 w-11 items-center justify-center rounded-xl text-xs font-semibold"
                          style={{ backgroundColor: ACCENT_SOFT_BG, color: SECONDARY }}
                      >
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

                            <div className="border-t border-slate-100 px-6 py-6 text-xs text-slate-500">
                                Tip: revisa “Incidentes y soporte” y “Reporte responsable”.
                            </div>
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <section className="lg:col-span-8 space-y-10">
                        <CardSection id="alcance" title="1. Alcance" icon={<ShieldCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Aplica al sitio, formularios, contenidos y cualquier interacción con Leonix Academy.</li>
                                <li>Busca proteger a usuarios, comunidad y una experiencia segura dentro de la plataforma.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="cuentas" title="2. Seguridad de la cuenta" icon={<Lock className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Usa contraseñas fuertes y no las compartas (ni por chat, ni por correo).</li>
                                <li>Evita iniciar sesión en equipos públicos; si lo haces, cierra sesión siempre.</li>
                                <li>Si notas actividad sospechosa, cambia tu contraseña y contáctanos.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="datos" title="3. Protección de datos" icon={<UserCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Recolectamos datos mínimos necesarios para operar, mejorar la experiencia y brindar soporte.</li>
                                <li>No publiques información sensible innecesaria (documentos, claves, datos bancarios, etc.).</li>
                                <li>Si usamos proveedores (p. ej., correo/hosting), aplican solo para operar el servicio cuando corresponda.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="uso" title="4. Uso aceptable" icon={<BadgeCheck className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>No se permite suplantación, fraude, spam, acoso o comportamiento abusivo.</li>
                                <li>No intentes interferir con el funcionamiento del sitio o manipular contenidos.</li>
                                <li>Podemos restringir acceso si detectamos abuso o riesgo para la comunidad.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="incidentes" title="5. Incidentes y soporte" icon={<AlertTriangle className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Revisamos reportes razonables y tomamos medidas para proteger a usuarios.</li>
                                <li>Podemos pedir detalles adicionales para entender el caso (sin pedirte contraseñas).</li>
                                <li>Si es necesario, podríamos limitar temporalmente ciertas funciones para reducir riesgos.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="reporte" title="6. Reporte responsable" icon={<Mail className="h-5 w-5" />}>
                            {/* ✅ Arreglado: “card dentro de card” con padding + aire real */}
                            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                <p className="text-slate-700">
                                    Si encuentras un problema de seguridad, <b>no lo explotes</b> ni lo publiques. Repórtalo de forma privada a:
                                </p>

                                <a
                                    className="mt-4 inline-flex items-center gap-2 font-semibold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{ color: SECONDARY, ['--tw-ring-color' as any]: ACCENT_RING } as CSSProperties}
                                    href={`mailto:${CONTACT_INFO.email}`}
                                >
                                    <Mail className="h-4 w-4" />
                                    {CONTACT_INFO.email}
                                </a>

                                <p className="mt-4 text-xs text-slate-500">
                                    Incluye: qué pasó, dónde lo viste y (si puedes) una captura o pasos para reproducir sin abuso.
                                </p>
                            </div>
                        </CardSection>

                        <CardSection id="cambios" title="7. Cambios a la política" icon={<Clock className="h-5 w-5" />}>
                            <p>
                                Podemos actualizar esta política para mejorar protección o cumplir requisitos. La versión vigente será la publicada en esta página.
                            </p>
                        </CardSection>

                        <div className="h-14" />
                    </section>
                </div>
            </div>
        </main>
    );
}

function MetaPill({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
      <span className="text-slate-500">{icon}</span>
            {label}
    </span>
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
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 sm:gap-5">
                        {/* ✅ Círculo AZUL más grande */}
                        <div
                            className="mt-0.5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-white shadow-sm shrink-0"
                            style={{ backgroundColor: SECONDARY }}
                        >
                            {icon}
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
                                {title}
                            </h2>
                        </div>
                    </div>

                    {/* ✅ TABULACIÓN REAL (en TODOS los tamaños) */}
                    <div className="mt-5 pl-[64px] sm:pl-[76px] text-sm sm:text-[15px] text-slate-600 leading-relaxed space-y-3">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}


