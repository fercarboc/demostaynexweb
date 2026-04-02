import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// ── Public pages ─────────────────────────────────────────────────────────────
import BookingPage from './public/pages/BookingPage';
import { HomePage } from './public/pages/HomePage';
import { LaCasaPage } from './public/pages/LaCasaPage';
import { GaleriaPage } from './public/pages/GaleriaPage';
import { ServiciosPage } from './public/pages/ServiciosPage';
import { ActividadesPage } from './public/pages/ActividadesPage';
import { ContactoPage } from './public/pages/ContactoPage';
import { SoportePage } from './public/pages/SoportePage';
import { DondeEstamosPage } from './public/pages/DondeEstamosPage';
import { Footer } from './public/components/Footer';
import { PoliticaCancelaciones } from './public/pages/LegalPages';
import { RGPD } from './public/pages/Rgpd';
import { AvisoLegal } from './public/pages/AvisoLegal';
import { Privacidad } from './public/pages/Privacidad';
import { Cookies } from './public/pages/Cookies';
import { Ayuda } from './public/pages/Ayuda';
import { Condiciones } from './public/pages/Condiciones';
import { ReservationViewPage } from './public/pages/ReservationViewPage';
import { CancelarReserva } from './public/pages/CancelarReserva';
import { CambioFechas } from './public/pages/CambioFechas';

// ── SEO pages ────────────────────────────────────────────────────────────────
import { CasaRuralGruposPage } from './public/pages/seo/CasaRuralGruposPage';
import { CasaRuralBarbacoaPage } from './public/pages/seo/CasaRuralBarbacoaPage';
import { CasaRuralVallesPasiegosPage } from './public/pages/seo/CasaRuralVallesPasiegosPage';

// ── Blog pages ───────────────────────────────────────────────────────────────
import { BlogIndexPage } from './public/pages/blog/BlogIndexPage';
import { QueVerVallesPasiegosPost } from './public/pages/blog/QueVerVallesPasiegosPost';
import { RutasSenderismoCantabriaPost } from './public/pages/blog/RutasSenderismoCantabriaPost';
import { CasaRuralGruposGuiaPost } from './public/pages/blog/CasaRuralGruposGuiaPost';
import { QueHacerCantabriaPost } from './public/pages/blog/QueHacerCantabriaPost';
import { ParqueCabarcenoPost } from './public/pages/blog/ParqueCabarcenoPost';

// ── Admin ─────────────────────────────────────────────────────────────────────
import { AuthProvider } from './admin/context/AuthContext';
import { ProtectedRoute } from './admin/components/ProtectedRoute';
import { AdminLayout } from './admin/components/AdminLayout';
import { LoginPage } from './admin/pages/LoginPage';
import { DashboardPage } from './admin/pages/DashboardPage';
import { CalendarPage } from './admin/pages/CalendarPage';
import { ReservationsPage } from './admin/pages/ReservationsPage';
import { ReservationDetailPage } from './admin/pages/ReservationDetailPage';
import { NewReservationPage } from './admin/pages/NewReservationPage';
import { CustomersPage } from './admin/pages/CustomersPage';
import { IncomePage } from './admin/pages/IncomePage';
import { InvoicesPage } from './admin/pages/InvoicesPage';
import { ConfigPage } from './admin/pages/ConfigPage';
import { ICalPage } from './admin/pages/ICalPage';

// ── Demo ──────────────────────────────────────────────────────────────────────
import { DemoConfigProvider } from './app/providers/DemoConfigProvider';
import { DemoLandingPage } from './public/pages/DemoLandingPage';
import { ReservaOk } from './public/pages/ReservaOk';
import { DemoBanner } from './public/components/DemoBanner';
import { useDemoConfig } from './hooks/useDemoConfig';

// ── Shared ────────────────────────────────────────────────────────────────────
import { useCookieConsent, CookieConsentContext } from './shared/hooks/useCookieConsent';
import { CookieBanner } from './shared/components/CookieBanner';

// ── ScrollToTop ───────────────────────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Nav links ─────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { to: '/la-casa',       label: 'La Casa' },
  { to: '/galeria',       label: 'Galería' },
  { to: '/servicios',     label: 'Servicios' },
  { to: '/actividades',   label: 'Actividades' },
  { to: '/donde-estamos', label: 'Dónde estamos' },
  { to: '/blog',          label: 'Blog' },
  { to: '/contacto',      label: 'Contacto' },
];

// ── Logo dinámico ─────────────────────────────────────────────────────────────
function NavLogo() {
  const { propertyName } = useDemoConfig();
  const { search } = useLocation();
  return (
    <Link to={`/site${search}`} className="text-2xl font-serif font-bold tracking-tight text-stone-800 hover:text-emerald-700 transition-colors">
      {propertyName}
    </Link>
  );
}

// ── Página cancelada ──────────────────────────────────────────────────────────
const ReservaCancelada = () => (
  <div className="mx-auto max-w-xl px-6 py-20 text-center">
    <div className="text-5xl mb-6">↩</div>
    <h1 className="text-2xl font-serif font-bold text-stone-800 mb-3">Pago cancelado</h1>
    <p className="text-stone-500 mb-8">No se ha realizado ningún cargo. Puedes volver a intentarlo cuando quieras.</p>
    <Link to="/reservar" className="inline-block rounded-full bg-emerald-800 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors">
      Volver a reservar
    </Link>
  </div>
);

// ── PublicLayout ──────────────────────────────────────────────────────────────
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const nameParam = new URLSearchParams(location.search).get('name');
  const withName = (path: string) =>
    nameParam ? `${path}?name=${encodeURIComponent(nameParam)}` : path;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col">
      <DemoBanner />

      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <NavLogo />

          <div className="hidden space-x-8 md:flex">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={withName(to)} className="text-sm font-medium hover:text-emerald-700 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={withName('/reservar')}
              className="rounded-full bg-emerald-800 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-900 hover:scale-105 active:scale-95"
            >
              Reservar ahora
            </Link>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-stone-100 transition-colors"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white/95 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={withName(to)} className="text-base font-medium text-stone-700 hover:text-emerald-700 transition-colors py-1">
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const cookieConsent = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      <DemoConfigProvider>
        <AuthProvider>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              {/* Demo landing */}
              <Route path="/" element={<DemoLandingPage />} />

              {/* Demo principal — equivale a la home */}
              <Route path="/site" element={<PublicLayout><HomePage /></PublicLayout>} />

              {/* Páginas públicas */}
              <Route path="/la-casa"        element={<PublicLayout><LaCasaPage /></PublicLayout>} />
              <Route path="/galeria"        element={<PublicLayout><GaleriaPage /></PublicLayout>} />
              <Route path="/servicios"      element={<PublicLayout><ServiciosPage /></PublicLayout>} />
              <Route path="/actividades"    element={<PublicLayout><ActividadesPage /></PublicLayout>} />
              <Route path="/donde-estamos"  element={<PublicLayout><DondeEstamosPage /></PublicLayout>} />
              <Route path="/contacto"       element={<PublicLayout><ContactoPage /></PublicLayout>} />
              <Route path="/reservar"       element={<PublicLayout><BookingPage /></PublicLayout>} />

              {/* Flujo reserva demo */}
              <Route path="/reserva-ok"        element={<ReservaOk />} />
              <Route path="/reserva/cancelada" element={<PublicLayout><ReservaCancelada /></PublicLayout>} />
              <Route path="/reserva/cancelar"  element={<PublicLayout><CancelarReserva /></PublicLayout>} />
              <Route path="/reserva/cambio"    element={<PublicLayout><CambioFechas /></PublicLayout>} />
              <Route path="/reserva/:token"    element={<PublicLayout><ReservationViewPage /></PublicLayout>} />

              {/* Legal */}
              <Route path="/aviso-legal"            element={<PublicLayout><AvisoLegal /></PublicLayout>} />
              <Route path="/privacidad"             element={<PublicLayout><Privacidad /></PublicLayout>} />
              <Route path="/cookies"                element={<PublicLayout><Cookies /></PublicLayout>} />
              <Route path="/ayuda"                  element={<PublicLayout><Ayuda /></PublicLayout>} />
              <Route path="/condiciones"            element={<PublicLayout><Condiciones /></PublicLayout>} />
              <Route path="/rgpd"                   element={<PublicLayout><RGPD /></PublicLayout>} />
              <Route path="/politica-cancelaciones" element={<PublicLayout><PoliticaCancelaciones /></PublicLayout>} />
              <Route path="/soporte"                element={<PublicLayout><SoportePage /></PublicLayout>} />

              {/* SEO */}
              <Route path="/casa-rural-cantabria-grupos"        element={<PublicLayout><CasaRuralGruposPage /></PublicLayout>} />
              <Route path="/casa-rural-con-barbacoa-cantabria"  element={<PublicLayout><CasaRuralBarbacoaPage /></PublicLayout>} />
              <Route path="/casa-rural-valles-pasiegos"         element={<PublicLayout><CasaRuralVallesPasiegosPage /></PublicLayout>} />

              {/* Blog */}
              <Route path="/blog"                                    element={<PublicLayout><BlogIndexPage /></PublicLayout>} />
              <Route path="/blog/que-ver-valles-pasiegos"            element={<PublicLayout><QueVerVallesPasiegosPost /></PublicLayout>} />
              <Route path="/blog/rutas-senderismo-cantabria"         element={<PublicLayout><RutasSenderismoCantabriaPost /></PublicLayout>} />
              <Route path="/blog/casa-rural-grupos-cantabria-guia"   element={<PublicLayout><CasaRuralGruposGuiaPost /></PublicLayout>} />
              <Route path="/blog/que-hacer-cantabria-escapada-rural" element={<PublicLayout><QueHacerCantabriaPost /></PublicLayout>} />
              <Route path="/blog/parque-cabaraceno-guia"             element={<PublicLayout><ParqueCabarcenoPost /></PublicLayout>} />

              {/* Admin */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                <Route index                 element={<DashboardPage />} />
                <Route path="dashboard"      element={<DashboardPage />} />
                <Route path="calendario"     element={<CalendarPage />} />
                <Route path="reservas"       element={<ReservationsPage />} />
                <Route path="reservas/nueva" element={<NewReservationPage />} />
                <Route path="reservas/:id"   element={<ReservationDetailPage />} />
                <Route path="clientes"       element={<CustomersPage />} />
                <Route path="ingresos"       element={<IncomePage />} />
                <Route path="facturas"       element={<InvoicesPage />} />
                <Route path="configuracion"  element={<ConfigPage />} />
                <Route path="ical"           element={<ICalPage />} />
              </Route>
            </Routes>
          </AnimatePresence>
          <CookieBanner />
        </AuthProvider>
      </DemoConfigProvider>
    </CookieConsentContext.Provider>
  );
}
