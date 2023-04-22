'use client';

import { store } from '@/stores/store';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';

export function StoreProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
