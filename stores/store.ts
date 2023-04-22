import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/stores/features/counter.slide';
import { counterEffect } from '@/stores/effect/counter.effect';

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(counterEffect.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
