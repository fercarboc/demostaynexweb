import React, { createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { DemoConfig } from '../../config/demoTypes';
import { DEMO_DEFAULTS } from '../../config/demoDefaults';

const DemoConfigContext = createContext<DemoConfig>(DEMO_DEFAULTS);

export function DemoConfigProvider({ children }: { children: React.ReactNode }) {
  const [searchParams] = useSearchParams();

  const config = useMemo<DemoConfig>(() => {
    const nameParam = searchParams.get('name')?.trim();
    return {
      ...DEMO_DEFAULTS,
      propertyName: nameParam || DEMO_DEFAULTS.propertyName,
    };
  }, [searchParams]);

  return (
    <DemoConfigContext.Provider value={config}>
      {children}
    </DemoConfigContext.Provider>
  );
}

export { DemoConfigContext };
