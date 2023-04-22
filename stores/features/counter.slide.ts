'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
  doubleCount: number;
};

const initialState = {
  value: 0,
  doubleCount: 0,
} as CounterState;

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    incrementDoubleCount: (state) => {
      state.doubleCount = state.value * 2;
    },
    decrementDoubleCount: (state) => {
      state.doubleCount = state.value * 2;
    },
  },
});
export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  incrementDoubleCount,
  decrementDoubleCount,
} = counter.actions;

export default counter.reducer;
