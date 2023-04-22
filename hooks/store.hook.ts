import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stores/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStore = <T>(selector: (state: RootState) => T) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector(selector);

  return { dispatch, state };
};
