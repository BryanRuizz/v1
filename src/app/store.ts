import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PortafolioSlice from '../redux/PortafolioSlice';



export const store = configureStore({
  reducer: {
    Portafolio: PortafolioSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
