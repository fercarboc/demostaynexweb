import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export const DemoLandingPage: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const propertyName = name.trim() || 'Casa Rural Demo';
    navigate(`/site?name=${encodeURIComponent(propertyName)}`);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header mínimo */}
      <header className="border-b border-stone-200 bg-white px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center">
          <Home size={16} className="text-white" />
        </div>
        <span className="text-lg font-serif font-bold text-stone-800">StayNexApp</span>
        <span className="ml-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-0.5">Demo</span>
      </header>

      {/* Contenido central */}
      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Entorno de demostración interactivo
          </div>

          <h1 className="text-4xl font-serif font-bold text-stone-900 leading-tight md:text-5xl">
            Crea una demo rápida<br />
            <span className="text-emerald-700">de tu casa rural</span>
          </h1>

          <p className="mt-5 text-lg text-stone-500 leading-relaxed">
            Escribe el nombre de tu alojamiento y comprueba cómo quedaría tu web de reservas directas, personalizada al instante.
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ej: Casa Rural El Bosque"
              className="flex-grow rounded-xl border border-stone-300 bg-white px-5 py-4 text-base text-stone-800 placeholder-stone-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              autoFocus
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-emerald-800 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Ver mi demo
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-4 text-xs text-stone-400">
            Si no escribes nada, usaremos "Casa Rural Demo" como nombre de ejemplo.
          </p>

          {/* Ejemplos rápidos */}
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">O prueba directamente con:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Casa Rural El Bosque',
                'Posada La Montaña',
                'El Refugio del Valle',
                'La Casona del Norte',
              ].map(example => (
                <button
                  key={example}
                  type="button"
                  onClick={() => navigate(`/site?name=${encodeURIComponent(example)}`)}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Info footer */}
          <div className="mt-14 p-5 rounded-2xl bg-stone-100 border border-stone-200 text-left space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">¿Qué incluye la demo?</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-stone-600">
              {[
                '✓ Web completa personalizada',
                '✓ Motor de reservas simulado',
                '✓ Calendario de disponibilidad',
                '✓ Cálculo de precios real',
                '✓ Proceso de reserva completo',
                '✓ Pantalla de confirmación',
              ].map(f => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
