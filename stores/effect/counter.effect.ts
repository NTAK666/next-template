import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  decrement,
  decrementDoubleCount,
  increment,
  incrementDoubleCount,
} from '@/stores/features/counter.slide';

export const counterEffect = createListenerMiddleware();

counterEffect.startListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(incrementDoubleCount());
  },
});

counterEffect.startListening({
  actionCreator: decrement,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(decrementDoubleCount());
  },
});
