import { DEMO_DEFAULTS } from './demoDefaults';

/** Lee el query param ?name= de la URL actual y lo devuelve limpio.
 *  Si no existe o está vacío, devuelve el nombre por defecto. */
export function getPropertyNameFromUrl(): string {
  try {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name')?.trim();
    return name || DEMO_DEFAULTS.propertyName;
  } catch {
    return DEMO_DEFAULTS.propertyName;
  }
}

/** Propaga el ?name= a una ruta interna de la demo. */
export function demoUrl(path: string, propertyName: string): string {
  const encoded = encodeURIComponent(propertyName);
  const sep = path.includes('?') ? '&' : '?';
  return `${path}${sep}name=${encoded}`;
}
