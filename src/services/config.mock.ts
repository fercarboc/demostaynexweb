import type { AppConfig, PricingConfig } from './config.service';

export const MOCK_PRICING: PricingConfig = {
  precio_noche_base:         220,
  precio_noche_alta:         270,
  extra_huesped_base:        15,
  extra_huesped_alta:        20,
  limpieza:                  120,
  descuento_no_reembolsable: 10,
  porcentaje_senal:          50,
  estancia_minima:           2,
  capacidad_base:            9,
  capacidad_max:             11,
};

export const MOCK_APP_CONFIG: AppConfig = {
  pricing: MOCK_PRICING,
  temporadas: [
    {
      nombre:          'Semana Santa 2026',
      fecha_inicio:    '2026-03-28',
      fecha_fin:       '2026-04-06',
      tipo:            'ALTA',
      estancia_minima: 4,
    },
    {
      nombre:          'Verano 2026',
      fecha_inicio:    '2026-07-01',
      fecha_fin:       '2026-08-31',
      tipo:            'ALTA',
      estancia_minima: 5,
    },
    {
      nombre:          'Puente de octubre 2026',
      fecha_inicio:    '2026-10-10',
      fecha_fin:       '2026-10-13',
      tipo:            'ALTA',
      estancia_minima: 3,
    },
    {
      nombre:          'Navidad y Fin de Año 2026',
      fecha_inicio:    '2026-12-22',
      fecha_fin:       '2027-01-06',
      tipo:            'ALTA',
      estancia_minima: 5,
    },
  ],
};

// Alias para compatibilidad con imports existentes
export const MOCK_CONFIG = MOCK_PRICING;

export const configMockService = {
  getConfig: async (): Promise<AppConfig> => MOCK_APP_CONFIG,
};
