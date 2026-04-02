import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

// En la demo siempre operamos en mock — sin conexión real a Supabase
export const isMockMode = true;

if (isMockMode) {
  console.info('[Demo] Modo mock activo — sin conexión real a Supabase ni Stripe.');
}

export const isSupabaseConfigured = () => {
  return !isMockMode;
};

export const getSupabaseClient = () => {
  if (isMockMode) {
    // Return a proxy that does nothing or warns
    return new Proxy({}, {
      get: (target, prop) => {
        return () => {
          console.warn(`Supabase ${String(prop)} called in MOCK MODE. No action taken.`);
          return { data: null, error: null };
        };
      }
    }) as any;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = getSupabaseClient();
