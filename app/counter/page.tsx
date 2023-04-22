'use client';

import { useStore } from '@/hooks/store.hook';
import { decrement, increment } from '@/stores/features/counter.slide';

export default function Page() {
  const {
    state: { value, doubleCount },
    dispatch,
  } = useStore((state) => state.counterReducer);

  return (
    <div className="text-white flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>Count : {value}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <p>Double Count : {doubleCount}</p>
    </div>
  );
}
