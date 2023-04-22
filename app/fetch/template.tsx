import { Boundary } from '@/components/Boundary';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
