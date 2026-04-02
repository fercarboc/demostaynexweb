import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Home, Calendar, CreditCard } from 'lucide-react';
import { DemoBanner } from '../components/DemoBanner';
import { DEMO_DEFAULTS } from '../../config/demoDefaults';

export const ReservaOk: React.FC = () => {
  const [searchParams] = useSearchParams();
  const propertyName = searchParams.get('name')?.trim() || DEMO_DEFAULTS.propertyName;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <DemoBanner />

      {/* Header mínimo */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md px-6 py-4">
        <Link to={`/site?name=${encodeURIComponent(propertyName)}`} className="text-2xl font-serif font-bold text-stone-800 hover:text-emerald-700 transition-colors">
          {propertyName}
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg text-center">

          {/* Icono de éxito */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-900/20">
            <CheckCircle2 size={40} className="text-white" />
          </div>

          <h1 className="text-4xl font-serif font-bold text-stone-900 leading-tight">
            ¡Reserva simulada<br />enviada!
          </h1>

          <p className="mt-5 text-lg text-stone-600 leading-relaxed">
            Reserva simulada enviada correctamente para{' '}
            <strong className="text-emerald-700">{propertyName}</strong>.
          </p>

          {/* Aviso demo */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-800 text-left space-y-1">
            <p className="font-bold">Esto es una demo — nada es real</p>
            <p>No se ha realizado ningún cobro real. No se ha enviado ningún email. Esta es una simulación del flujo de reserva de StayNexApp.</p>
          </div>

          {/* Resumen visual */}
          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-left space-y-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">En una reserva real recibirías:</p>
            <div className="space-y-3">
              {[
                { icon: CheckCircle2, text: 'Email de confirmación con todos los detalles de tu estancia' },
                { icon: Calendar,     text: 'Código de reserva único para gestionar tu estancia' },
                { icon: CreditCard,   text: 'Factura descargable en PDF con el desglose de precios' },
                { icon: Home,         text: 'Instrucciones de llegada y datos de contacto del alojamiento' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Acciones */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={`/site?name=${encodeURIComponent(propertyName)}`}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-stone-300 px-6 py-3 text-sm font-bold text-stone-700 hover:border-stone-500 transition-all"
            >
              <Home size={16} />
              Volver al inicio de la demo
            </Link>
            <Link
              to={`/reservar?name=${encodeURIComponent(propertyName)}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-800 transition-all"
            >
              <Calendar size={16} />
              Volver a reservar
            </Link>
          </div>

          {/* CTA StayNexApp */}
          <div className="mt-12 rounded-2xl bg-emerald-800 p-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-2">¿Te gusta lo que ves?</p>
            <p className="text-lg font-serif font-bold mb-4">Consigue esta web para tu alojamiento</p>
            <a
              href="https://staynexapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-50 transition-all"
            >
              Contactar con StayNexApp →
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};
