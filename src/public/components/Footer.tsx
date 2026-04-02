import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { GestionarCookiesBtn } from '../../shared/components/CookieBanner';
import { useDemoConfig } from '../../hooks/useDemoConfig';

export const Footer = () => {
  const { propertyName, contactEmail, contactPhone, address } = useDemoConfig();
  const { search } = useLocation();
  const withName = (path: string) => `${path}${search ? search : ''}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to={withName('/site')} className="text-3xl font-serif font-bold tracking-tight text-white">
              {propertyName}
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Alojamiento rural de alquiler íntegro ideal para grupos de hasta 11 personas con jardín privado y barbacoa. Reserva directa sin intermediarios.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Info */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navegación</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={withName('/site')}         className="hover:text-emerald-400 transition-colors">Inicio</Link></li>
                <li><Link to={withName('/la-casa')}      className="hover:text-emerald-400 transition-colors">La Casa</Link></li>
                <li><Link to={withName('/galeria')}      className="hover:text-emerald-400 transition-colors">Galería</Link></li>
                <li><Link to={withName('/servicios')}    className="hover:text-emerald-400 transition-colors">Servicios</Link></li>
                <li><Link to={withName('/actividades')}  className="hover:text-emerald-400 transition-colors">Actividades</Link></li>
                <li><Link to={withName('/reservar')}     className="hover:text-emerald-400 transition-colors">Reservas</Link></li>
                <li><Link to={withName('/contacto')}     className="hover:text-emerald-400 transition-colors">Contacto</Link></li>
                <li><Link to={withName('/blog')}         className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Información</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={withName('/ayuda')}                  className="hover:text-emerald-400 transition-colors">Centro de ayuda</Link></li>
                <li><Link to={withName('/condiciones')}            className="hover:text-emerald-400 transition-colors">Condiciones de reserva</Link></li>
                <li><Link to={withName('/politica-cancelaciones')} className="hover:text-emerald-400 transition-colors">Política de cancelación</Link></li>
                <li><Link to={withName('/contacto')}               className="hover:text-emerald-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                <span>{contactPhone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                <span>{contactEmail}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-1" />
                <span>{address}</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                to={withName('/reservar')}
                className="group flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700"
              >
                Reservar ahora
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="border-t border-stone-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-stone-500">
            <Link to={withName('/ayuda')}       className="hover:text-stone-300 transition-colors">Ayuda</Link>
            <Link to={withName('/aviso-legal')} className="hover:text-stone-300 transition-colors">Aviso Legal</Link>
            <Link to={withName('/privacidad')}  className="hover:text-stone-300 transition-colors">Privacidad</Link>
            <Link to={withName('/cookies')}     className="hover:text-stone-300 transition-colors">Cookies</Link>
            <Link to={withName('/rgpd')}        className="hover:text-stone-300 transition-colors">RGPD</Link>
            <GestionarCookiesBtn />
            <Link to="/admin" className="hover:text-stone-300 transition-colors font-bold border-l border-stone-800 pl-6 ml-2">Acceso Propietario</Link>
          </div>
          <p className="text-[11px] uppercase tracking-widest text-stone-600">
            © {year} {propertyName}. Powered by StayNexApp.
          </p>
        </div>
      </div>
    </footer>
  );
};

