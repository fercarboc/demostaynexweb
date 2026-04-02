import { addDays, format } from 'date-fns';

/** Genera un array de strings 'yyyy-MM-dd' para un rango de fechas */
function range(start: string, end: string): string[] {
  const dates: string[] = [];
  let current = new Date(start);
  const last = new Date(end);
  while (current <= last) {
    dates.push(format(current, 'yyyy-MM-dd'));
    current = addDays(current, 1);
  }
  return dates;
}

// Fechas ocupadas mock — simulan reservas reales en el futuro próximo
const MOCK_OCCUPIED: string[] = [
  ...range('2026-04-10', '2026-04-14'), // reserva de ejemplo (puente)
  ...range('2026-05-02', '2026-05-05'), // reserva corta mayo
  ...range('2026-06-20', '2026-06-27'), // semana de verano temprano
  ...range('2026-07-15', '2026-07-22'), // julio ocupado
  ...range('2026-08-01', '2026-08-10'), // agosto 1ª quincena
];

export const getMockOccupiedDates = async (): Promise<string[]> => {
  return MOCK_OCCUPIED;
};
