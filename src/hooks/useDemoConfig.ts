import { useContext } from 'react';
import { DemoConfigContext } from '../app/providers/DemoConfigProvider';

export function useDemoConfig() {
  return useContext(DemoConfigContext);
}
