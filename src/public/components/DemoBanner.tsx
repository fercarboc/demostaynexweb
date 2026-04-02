import React from 'react';
import { FlaskConical } from 'lucide-react';

export const DemoBanner: React.FC = () => (
  <div className="w-full bg-amber-400 text-amber-950 text-center text-xs font-bold py-2 px-4 tracking-wide z-50 flex items-center justify-center gap-2">
    <FlaskConical size={14} className="shrink-0" />
    <span>Demo StayNexApp · Entorno de demostración · Las reservas y pagos son simulados</span>
  </div>
);
