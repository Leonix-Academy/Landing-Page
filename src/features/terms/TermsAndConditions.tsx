import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../../shared/constants';
import {
    ArrowLeft,
    Scale,
    Clock,
    BadgeCheck,
    AlertTriangle,
    Mail,
    FileText,
    User,
    Shield,
    CreditCard,
    Ban,
    Gavel,
    Lock,
} from 'lucide-react';

type TocItem = { id: string; n: string; title: string; hint: string };

const SECONDARY = '#145cfc';
const ACCENT_SOFT_BG = 'rgba(20, 92, 252, 0.12)';
const ACCENT_RING = 'rgba(20, 92, 252, 0.35)';

export function TermsAndConditions() {
    const navigate = useNavigate();

    const toc = useMemo<TocItem[]>(
        () => [
            { id: 'aceptacion', n: '01', title: 'Aceptación de términos', hint: 'Acuerdo legal de uso' },
            { id: 'definiciones', n: '02', title: 'Definiciones', hint: 'Conceptos clave' },
            { id: 'uso', n: '03', title: 'Uso del servicio', hint: 'Reglas básicas de uso' },
            { id: 'cuentas', n: '04', title: 'Cuentas y acceso', hint: 'Responsabilidad del usuario' },
            { id: 'propiedad', n: '05', title: 'Propiedad intelectual', hint: 'Contenido y marca' },
            { id: 'usuario', n: '06', title: 'Contenido del usuario', hint: 'Lo que publicas o envías' },
            { id: 'pagos', n: '07', title: 'Pagos y reembolsos', hint: 'Si aplica' },
            { id: 'responsabilidad', n: '08', title: 'Responsabilidad y limitaciones', hint: 'Blindaje y alcance' },
            { id: 'suspension', n: '09', title: 'Suspensión / terminación', hint: 'Incumplimientos' },
            { id: 'terceros', n: '10', title: 'Servicios de terceros', hint: 'Links y herramientas externas' },
            { id: 'ley', n: '11', title: 'Ley aplicable', hint: 'Jurisdicción' },
            { id: 'cambios', n: '12', title: 'Cambios a los términos', hint: 'Actualizaciones' },
            { id: 'contacto', n: '13', title: 'Contacto', hint: 'Soporte y consultas' },
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
            {/* Navbar safe space */}
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
                                    <MetaPill icon={<Scale className="h-4 w-4" />} label="Versión 2.0" />
                                    <MetaPill icon={<Clock className="h-4 w-4" />} label="Última actualización: Enero 2026" />
                                    <MetaPill icon={<BadgeCheck className="h-4 w-4" />} label="Vigente" />
                                </div>
                            </div>

                            <div className="max-w-3xl">
                                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                                    Términos y Condiciones
                                </h1>
                                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                                    Al acceder o utilizar Leonix Academy, aceptas estar legalmente vinculado por estos términos.
                                    Por favor, léelos cuidadosamente antes de usar la plataforma.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* NOTICE */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                    <div className="flex items-start gap-3">
                        <div
                            className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
                            style={{ backgroundColor: SECONDARY }}
                        >
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-slate-900">Aviso importante</h2>
                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
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
                                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Índice</p>
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
                          style={{
                              backgroundColor: ACCENT_SOFT_BG,
                              color: SECONDARY,
                          }}
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
                                Recomendación: revisa “Responsabilidad y limitaciones” antes de usar la plataforma.
                            </div>
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <section className="lg:col-span-8 space-y-10">
                        <CardSection id="aceptacion" title="1. Aceptación de términos" icon={<FileText className="h-5 w-5" />}>
                            <p>
                                Al usar Leonix Academy confirmas que has leído, entendido y aceptado estos términos. Si utilizas la
                                plataforma en nombre de una organización, declaras que cuentas con autorización para hacerlo.
                            </p>
                        </CardSection>

                        <CardSection id="definiciones" title="2. Definiciones" icon={<User className="h-5 w-5" />}>
                            <ul className="space-y-2">
                                <li>
                                    <b>Plataforma:</b> sitio web, servicios y recursos de Leonix Academy.
                                </li>
                                <li>
                                    <b>Usuario:</b> persona que accede o utiliza la plataforma.
                                </li>
                                <li>
                                    <b>Contenido:</b> materiales educativos (textos, guías, recursos, videos, etc.).
                                </li>
                            </ul>
                        </CardSection>

                        <CardSection id="uso" title="3. Uso del servicio" icon={<Shield className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>El contenido es educativo y puede cambiar o actualizarse sin previo aviso.</li>
                                <li>Te comprometes a un uso lícito, respetuoso y sin interferir con la operación del sitio.</li>
                                <li>Prohibido: suplantación, spam, abuso, intento de evadir reglas o afectar la disponibilidad.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="cuentas" title="4. Cuentas y acceso" icon={<Lock className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Eres responsable de la confidencialidad de tus accesos y actividad en tu cuenta.</li>
                                <li>No compartas credenciales ni uses cuentas ajenas.</li>
                                <li>Podemos solicitar verificación razonable si detectamos actividad inusual.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="propiedad" title="5. Propiedad intelectual" icon={<Gavel className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Los contenidos, marca y diseño pertenecen a Leonix Academy o sus licenciantes.</li>
                                <li>No está permitido copiar, revender o redistribuir material sin autorización expresa.</li>
                                <li>Se permite uso personal/educativo dentro de la plataforma, salvo indicación distinta.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="usuario" title="6. Contenido del usuario" icon={<User className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Si envías contenido, garantizas que tienes derecho a compartirlo.</li>
                                <li>No publiques información sensible (datos personales de terceros, claves, etc.).</li>
                                <li>Podemos moderar o retirar contenido que infrinja reglas o cause riesgo.</li>
                            </ul>
                        </CardSection>

                        <CardSection
                            id="pagos"
                            title="7. Pagos, planes y reembolsos (si aplica)"
                            icon={<CreditCard className="h-5 w-5" />}
                        >
                            <p>
                                Si se ofrecen planes de pago, se indicarán precios, alcance y condiciones en la página correspondiente.
                                Cualquier política de reembolso (si existe) se comunicará de forma explícita.
                            </p>
                        </CardSection>

                        <CardSection
                            id="responsabilidad"
                            title="8. Responsabilidad y limitaciones"
                            icon={<Scale className="h-5 w-5" />}
                        >
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Leonix Academy ofrece contenidos “tal cual” con fines educativos.</li>
                                <li>No garantizamos resultados académicos específicos, puntajes, aprobaciones o certificaciones externas.</li>
                                <li>No somos responsables por pérdidas indirectas derivadas del uso o imposibilidad de uso del servicio.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="suspension" title="9. Suspensión / terminación" icon={<Ban className="h-5 w-5" />}>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Podemos suspender o limitar el acceso si incumples estos términos o hay riesgo para la comunidad.</li>
                                <li>También podemos retirar contenido si infringe reglas o derechos de terceros.</li>
                            </ul>
                        </CardSection>

                        <CardSection id="terceros" title="10. Servicios de terceros" icon={<Shield className="h-5 w-5" />}>
                            <p>
                                La plataforma puede incluir enlaces o integraciones de terceros. No controlamos sus políticas, por lo que
                                recomendamos revisar sus términos cuando corresponda.
                            </p>
                        </CardSection>

                        <CardSection id="ley" title="11. Ley aplicable" icon={<Gavel className="h-5 w-5" />}>
                            <p>Estos términos se rigen por la normativa aplicable en Perú, salvo disposición distinta por ley.</p>
                        </CardSection>

                        <CardSection id="cambios" title="12. Cambios a los términos" icon={<Clock className="h-5 w-5" />}>
                            <p>
                                Podemos actualizar estos términos. La versión vigente será la publicada en esta página. El uso continuado
                                implica aceptación de los cambios.
                            </p>
                        </CardSection>

                        <CardSection id="contacto" title="13. Contacto" icon={<Mail className="h-5 w-5" />}>
                            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                <p className="text-slate-700">
                                    Para dudas sobre estos términos, escríbenos y te responderemos lo antes posible.
                                </p>

                                <a
                                    className="mt-4 inline-flex items-center gap-2 font-semibold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{ color: SECONDARY, ['--tw-ring-color' as any]: ACCENT_RING } as CSSProperties}
                                    href={`mailto:${CONTACT_INFO.email}`}
                                >
                                    <Mail className="h-4 w-4" />
                                    {CONTACT_INFO.email}
                                </a>
                            </div>
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

