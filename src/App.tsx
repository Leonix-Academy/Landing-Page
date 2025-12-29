import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, ErrorBoundary, WhatsAppButton } from './shared/components';

const ProfessionalHeroSection = lazy(() =>
    import('./features/hero').then(m => ({ default: m.ProfessionalHeroSection }))
);
const MinimalPurposeSection = lazy(() =>
    import('./features/purpose').then(m => ({ default: m.MinimalPurposeSection }))
);
const ProfessionalBenefitsSection = lazy(() =>
    import('./features/benefits').then(m => ({ default: m.ProfessionalBenefitsSection }))
);
const FreshCoursesSection = lazy(() =>
    import('./features/courses').then(m => ({ default: m.FreshCoursesSection }))
);
const MinimalAudienceSection = lazy(() =>
    import('./features/audience').then(m => ({ default: m.MinimalAudienceSection }))
);
const MinimalMethodologySection = lazy(() =>
    import('./features/methodology').then(m => ({ default: m.MinimalMethodologySection }))
);
const ProfessionalTestimonialsSection = lazy(() =>
    import('./features/testimonials').then(m => ({ default: m.ProfessionalTestimonialsSection }))
);
const ProfessionalContactSection = lazy(() =>
    import('./features/contact').then(m => ({ default: m.ProfessionalContactSection }))
);
const SimpleFooter = lazy(() =>
    import('./features/footer').then(m => ({ default: m.SimpleFooter }))
);

const TermsAndConditions = lazy(() =>
    import('./features/terms/TermsAndConditions').then(m => ({ default: m.TermsAndConditions }))
);

const PolicySecurity = lazy(() =>
    import('./features/policy/PolicySecurity').then(m => ({ default: m.PolicySecurity }))
);

const SectionLoader = () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
    </div>
);

function Home() {
  return (
      <>
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalHeroSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MinimalPurposeSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalBenefitsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FreshCoursesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MinimalAudienceSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MinimalMethodologySection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalTestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalContactSection />
        </Suspense>
      </>
  );
}

export default function App() {
  return (
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                  path="/terminos"
                  element={
                    <Suspense fallback={<SectionLoader />}>
                      <TermsAndConditions />
                    </Suspense>
                  }
              />
              <Route
                  path="/politicas"
                  element={
                    <Suspense fallback={<SectionLoader />}>
                      <PolicySecurity />
                    </Suspense>
                  }
              />
            </Routes>
          </main>

          <Suspense fallback={null}>
            <SimpleFooter />
          </Suspense>

          <WhatsAppButton />
        </div>
      </ErrorBoundary>
  );
}
